import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <style>
        {`
          .hero-section {
            padding: 1rem;
          }

          .hero-title {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-weight: 600;
          }

          .hero-subtitle {
            font-size: clamp(1rem, 2.5vw, 1.5rem);
          }

          .hero-link {
            text-decoration: none;
            font-weight: 500;
          }

          @media (min-width: 768px) {
            .hero-section {
              padding: 2rem 4rem;
            }
          }
        `}
      </style>

      <div className="text-center mt-5 hero-section">
        <h1 className="hero-title">Zerodha Products</h1>
        <h3 className="text-muted mt-3 hero-subtitle">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="invest" className="hero-link">
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
