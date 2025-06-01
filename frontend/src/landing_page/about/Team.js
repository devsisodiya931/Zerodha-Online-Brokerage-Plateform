import React from "react";

function Team() {
  return (
    <>
      <style>
        {`
          .team-section {
            line-height: 1.8;
            font-size: 1.2em;
            padding: 1rem;
          }

          .team-image {
            border-radius: 100%;
            width: 60%;
            max-width: 200px;
          }

          @media (min-width: 768px) {
            .team-section {
              padding: 2rem 4rem;
            }
            .team-image {
              width: 50%;
            }
          }
        `}
      </style>

      <div className="container">
        <div className="row p-3 mt-5 border-top">
          <h1 className="text-center">People</h1>
        </div>

        <div className="row team-section text-muted">
          <div className="col-12 col-md-6 p-3 text-center">
            <img
              src="media/images/nithinKamath.jpg"
              className="team-image"
              alt="Nithin Kamath"
            />
            <h4 className="mt-5">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-12 col-md-6 p-3">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="Home">Homepage</a> /{" "}
              <a href="TradingQnA">TradingQnA</a> /{" "}
              <a href="Twitter">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
