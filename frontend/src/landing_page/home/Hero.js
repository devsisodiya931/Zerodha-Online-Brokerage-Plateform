import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary fs-5 mb-5 d-block mx-auto p-3"
          style={{
            width: "30%",
            maxWidth: "300px",
          }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
