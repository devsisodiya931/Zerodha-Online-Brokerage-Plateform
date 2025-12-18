require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const User = require("./model/userModel");
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();

// 🛡️ CORS configuration
const allowedOrigins = [
  "https://zerodha-online-brokerage-plateform.vercel.app",
  "https://zerodha-online-brokerage-plateform-esat-eq04j3qn7.vercel.app",
  "https://zerodha-online-brokerage-pla-git-72ca48-dev-kumar-rays-projects.vercel.app",
  "https://zerodha-online-brokerage-plateform-five.vercel.app" // ✅ Add any new one here
];

app.use(cors({
  origin: true,        // allow all Vercel URLs
  credentials: false   // 🔥 header JWT, no cookies
}));


// Required for parsing body and cookies
app.use(bodyParser.json());
app.use(cookieParser());

// 🌐 Root & health check
app.get("/", (req, res) => res.send("Backend is running"));
app.get("/health", (req, res) => res.json({ status: "ok" }));

// 🔐 JWT Auth middleware
const authenticateToken = (req, res, next) => {
  const token =
    req.cookies?.authToken || req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ message: "Token invalid or expired" });
    req.user = user;
    next();
  });
};

// Signup
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

   // res.cookie("authToken", token, {
    //  httpOnly: true,
    //  secure: true, // Set to true in production
     // sameSite: "none",
   //   maxAge: 24 * 60 * 60 * 1000,
   // });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

//    res.cookie("authToken", token, {
//      httpOnly: true,
//      secure: true,
//      sameSite: "none",
 //     maxAge: 24 * 60 * 60 * 1000,
//    });

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Profile
app.get("/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Logout
app.post("/logout", (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    sameSite: "strict",
    secure: false,
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// Holdings, Positions, Orders
app.get("/allHoldings", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userid; // fix here
    const allHoldings = await HoldingsModel.find({ userId });
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

app.get("/allPositions", authenticateToken, async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", authenticateToken, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    console.log("New order data:", req.body, "User:", req.user);

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
      userId: req.user.userId,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved!" }); 
  } catch (error) {
    console.error("Error saving order:", error);
    return res
      .status(500)
      .json({ message: "Failed to place order", error: error.message });
  }
});

app.get("/allOrders", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const orders = await OrdersModel.find({ userId });
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// Start server
mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log("MongoDB connected");
    });
  })
  .catch((err) => console.error("DB connection error:", err));





