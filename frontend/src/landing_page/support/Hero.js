import React, { useEffect } from "react";

function Hero() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section className="hero-wrapper">
      <style>{`
        .hero-wrapper {
          background-color: #3585d6;
          color: white;
          padding: 2rem 1rem;
          position: relative;
        }

        .track-link {
          position: absolute;
          top: 6rem; /* pushes it below fixed navbar */
          right: 2rem;
          color: white;
          text-decoration: underline;
          font-weight: 500;
          font-size: 1rem;
          z-index: 10;
        }

        .hero-top h4 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .hero-content {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 3rem;
        }

        .hero-left,
        .hero-right {
          flex: 1;
          min-width: 280px;
        }

        .hero-left h1,
        .hero-right h1 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .hero-left input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          border: none;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .hero-left input::placeholder {
          color: #999;
        }

        .hero-left a,
        .hero-right a {
          display: block;
          color: white;
          text-decoration: underline;
          margin-bottom: 0.8rem;
        }

        .hero-right ol {
          padding-left: 1.2rem;
        }

        .hero-right li {
          margin-bottom: 0.8rem;
        }

        @media (max-width: 768px) {
          .track-link {
            top: 6.5rem; /* slightly lower for small screens */
            right: 1rem;
            font-size: 0.95rem;
          }
        }
      `}</style>

      {/* Track link positioned top-right always */}
      <a className="track-link" href="track">Track tickets</a>

      {/* Left aligned heading */}
      <div className="hero-top mt-5">
        <h4>Support Portal</h4>
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <h1>Search for an answer or browse help topics to create a ticket</h1>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
          />
          <a href="account">Track account opening</a>
          <a href="track">Track segment activation</a>
          <a href="margin">Intraday margins</a>
          <a href="kite">Kite user manual</a>

          <h1>Featured</h1>
          <ol>
            <li>
              <a href="leverage">Latest Intraday leverages and Square-off timings</a>
            </li>
            <li>
              <a href="ofs">Offer for sale (OFS) – May 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
