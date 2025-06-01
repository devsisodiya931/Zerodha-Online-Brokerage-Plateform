import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="media/images/education.svg"
            alt="Market Education"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="varsity" className="text-decoration-none fw-semibold">
            Varsity{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="Trading" className="text-decoration-none fw-semibold">
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
