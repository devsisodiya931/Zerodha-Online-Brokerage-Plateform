import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <>
      <style>
        {`
          .right-section-container {
            padding: 1rem;
          }

          .right-section-img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
          }

          .right-section-text {
            padding: 1rem;
          }

          @media (min-width: 768px) {
            .right-section-text {
              padding: 3rem;
            }
          }

          @media (max-width: 767px) {
            .right-section-row {
              flex-direction: column-reverse;
            }
          }
        `}
      </style>

      <div className="container mt-5 right-section-container">
        <div className="row d-flex align-items-center right-section-row">
          <div className="col-12 col-md-6 right-section-text">
            <h1>{productName}</h1>
            <p>{productDesription}</p>
            <div>
              <a href={learnMore}>Learn More</a>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={imageURL} className="right-section-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
