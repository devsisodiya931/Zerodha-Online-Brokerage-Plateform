import React from "react";

function Hero() {
  return (
    <>
      <style>
        {`
          .pricing-img {
            width: 100%;
            height: auto;
            max-width: 200px;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .pricing-col {
              width: 100% !important;
              max-width: 100%;
              flex: 0 0 100%;
              text-align: center;
              margin-bottom: 2rem;
            }
          }

          @media (min-width: 769px) {
            .pricing-col {
              width: 33.33%;
              flex: 0 0 33.33%;
            }
          }
        `}
      </style>

      <div className="container">
        <div className="row p-5 mt-5 border-bottom text-center">
          <h1>Charges</h1>
          <h3 className="text-muted mt-3 fs-5">
            List of all charges and taxes{" "}
          </h3>
        </div>

        <div className="row p-5 mt-5 text-center">
          <div className="col-12 col-md-4 p-4 pricing-col">
            <img
              src="media/images/pricingEquity.svg"
              className="pricing-img"
              alt="Free equity"
            />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted ">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹0 brokerage.
            </p>
          </div>

          <div className="col-12 col-md-4 p-4 pricing-col">
            <img
              src="media/images/intradayTrades.svg"
              className="pricing-img"
              alt="Intraday"
            />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>

          <div className="col-12 col-md-4 p-4 pricing-col">
            <img
              src="media/images/pricingEquity.svg"
              className="pricing-img"
              alt="Free MF"
            />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
