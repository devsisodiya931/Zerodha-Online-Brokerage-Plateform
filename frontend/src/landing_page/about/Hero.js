import React from "react";

function Hero() {
  const responsivePadding = window.innerWidth >= 768 ? "2rem 4rem" : "2rem 1rem";

  return (
    <div className="container">
      <div
        className="row mt-5 mb-5"
        style={{
          padding: responsivePadding,
          textAlign: "center",
        }}
      >
        <h1
          className="fs-2"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: "600",
          }}
        >
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row border-top text-muted"
        style={{
          lineHeight: "1.8",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          padding: responsivePadding,
        }}
      >
        <div className="col-12 col-md-6 mb-4 mb-md-0" style={{ padding: "1rem" }}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-12 col-md-6" style={{ padding: "1rem" }}>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a
              href="rainmatter"
              style={{ textDecoration: "none", color: "#0d6efd" }}
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
