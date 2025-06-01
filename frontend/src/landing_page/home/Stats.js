import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 mb-5 mb-md-0">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="h5 mt-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="h5 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h2 className="h5 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="h5 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Image & Centered Links Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />

          {/* Centered horizontal links */}
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="product" className="text-decoration-none fw-semibold">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right ms-1"></i>
            </a>
            <a href="demo" className="text-decoration-none fw-semibold">
              Try Kite demo <i className="fa fa-long-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
