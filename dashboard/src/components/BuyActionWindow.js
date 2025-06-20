import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const navigate = useNavigate();

  const { closeBuyWindow } = useContext(GeneralContext);

const handleBuyClick = async () => {
  try {
    const response = await axios.post(
      "https://zerodha-online-brokerage-plateform-1.onrender.com/newOrder",
      {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      },
      {
        withCredentials: true, // Send cookies for auth
      }
    );

    if (response.status === 201 && response.data.message === "Order saved!") {
      alert("✅ Order placed successfully!");
      closeBuyWindow();
      navigate("/orders"); // Go to orders page
    } else {
      alert("⚠️ Order placed, but unexpected response");
    }
  } catch (error) {
    console.error("Error placing order:", error);
    alert(
      "❌ Failed to place order: " +
        (error.response?.data?.message || error.message)
    );
  }
};


  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
