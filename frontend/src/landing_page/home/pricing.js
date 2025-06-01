import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" className="text-decoration-none fw-semibold">
            See Pricing{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer (optional) */}
        <div className="d-none d-md-block col-md-2"></div>

        {/* Pricing Boxes */}
        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-12 col-sm-6 p-3 border mb-3 mb-sm-0">
              <h1 className="mb-2">₹0</h1>
              <p className="mb-0">
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 p-3 border">
              <h1 className="mb-2">₹20</h1>
              <p className="mb-0">Intraday and F&amp;O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
