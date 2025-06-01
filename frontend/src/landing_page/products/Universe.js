import React from "react";

function Universe() {
  return (
    <>
      <style>
        {`
          .universe-section {
            padding: 1rem;
          }

          .universe-title {
            margin-top: 2rem;
          }

          .universe-card {
            padding: 1rem;
          }

          .universe-card img {
            max-width: 100px;
            height: auto;
            margin-bottom: 0.5rem;
          }

          .signup-button {
            width: 60%;
            max-width: 200px;
            margin: 2rem auto;
            display: block;
          }

          @media (min-width: 768px) {
            .signup-button {
              width: 20%;
            }
          }
        `}
      </style>

      <div className="container universe-section">
        <div className="row text-center">
          <h1 className="universe-title">The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          {[...Array(6)].map((_, index) => (
            <div key={index} className="col-6 col-md-4 universe-card">
              <img src="media/images/smallcaseLogo.png" alt="Platform Logo" />
              <p className="text-muted text-small">Thematic investment platform</p>
            </div>
          ))}

          <button className="btn btn-primary fs-5 signup-button">
            Signup Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
