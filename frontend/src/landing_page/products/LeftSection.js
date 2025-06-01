import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <style>
        {`
          .left-section {
            padding: 1rem;
          }

          .left-text h1 {
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            font-weight: 600;
          }

          .left-text p {
            font-size: clamp(1rem, 2vw, 1.25rem);
            line-height: 1.6;
            margin-top: 1rem;
            margin-bottom: 1.5rem;
          }

          .left-text a {
            text-decoration: none;
            font-weight: 500;
          }

          .left-text .link-gap {
            margin-left: 2rem;
          }

          .store-badges img {
            max-width: 150px;
            width: 100%;
            height: auto;
          }

          .store-badges .badge-gap {
            margin-left: 1rem;
          }

          @media (max-width: 767px) {
            .left-section .row {
              flex-direction: column;
            }

            .left-section .col-6 {
              width: 100%;
              padding: 1rem 0;
              text-align: center;
            }

            .left-text {
              padding: 1rem;
            }

            .left-text .link-gap,
            .store-badges .badge-gap {
              margin-left: 1rem;
            }
          }
        `}
      </style>

      <div className="row left-section">
        <div className="col-6">
          <img src={imageURL} alt="Product" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-6 left-text">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} className="link-gap">Learn More</a>
          </div>
          <div className="mt-3 store-badges">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} className="badge-gap">
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
