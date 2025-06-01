import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      {/* Inject global styles */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .page-container {
            display: flex;
            flex-direction: column;
          }

          .main-content {
            flex: 1;
          }


          .right-info-box {
            width: 100%;
            max-width: 700px;
            margin-left: auto;
            margin-right: 0;
            background-color: #f8f8f8;
            padding: 1.5rem;
            font-size: 0.85rem;
            line-height: 1.6;
            border-left: 3px solid #ddd;
            border-radius: 8px;
            margin-top: 3rem;
            margin-bottom: 3rem;
          }

          @media (max-width: 768px) {
            .right-info-box {
              padding: 1rem;
              font-size: 0.75rem;
            }
          }
        `}
      </style>

      <div className="page-container">
        <div className="main-content">
          <Hero />

          <LeftSection
            imageURL="media/images/kite.png"
            productName="Kite"
            productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
          />

          <RightSection
            imageURL="media/images/console.png"
            productName="Console"
            productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
            learnMore=""
          />
          <LeftSection
            imageURL="media/images/coin.png"
            productName="Coin"
            productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
          />
          <RightSection
            imageURL="media/images/kiteconnect.png"
            productName="Kite Connect API"
            productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore=""
          />
          <LeftSection
            imageURL="media/images/varsity.png"
            productName="Varsity mobile"
            productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
          />
          <p className="text-center mt-5 mb-5">
            Want to know more about our technology stack? Check out the
            Zerodha.tech blog.
          </p>
        </div>
      </div>
      <Universe />
    </>
  );
}

export default PricingPage;
