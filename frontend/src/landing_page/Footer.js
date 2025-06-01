import React from "react";

function Footer() {
  return (
    <>
      <style>
        {`
          footer .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          footer p, footer a {
            text-align: justify;
            margin-left: 0 !important;
            padding-left: 0 !important;
          }

          footer .row {
            margin-left: 0;
            margin-right: 0;
          }

          footer .col-12 {
            padding-left: 0;
            padding-right: 0;
          }

           .disclaimer-text {
      font-size: 0.7rem;
      color: #6c757d;
      font-style: italic;
      line-height: 1.8;
      letter-spacing: 0.2px;
      text-align: justify;
      margin-top: 2rem;
    }
    .disclaimer-text p {
      margin-bottom: 1rem;
    }
        `}
      </style>

      <footer
        className="border-top"
        style={{
          backgroundColor: "rgb(250, 250, 250)",
          padding: "0.5rem 1rem",
        }}
      >
        <div className="container">
          <div className="row mt-3 gx-4 gy-4">
            <div className="col-12 col-md-3">
              <img
                src="media/images/logo.svg"
                alt="Logo"
                style={{ width: "100%", maxWidth: "150px" }}
              />
              <p className="text-muted mt-3" style={{ fontSize: "0.85rem" }}>
                <strong>&copy;</strong> 2010 - 2024, Not Zerodha Broking Ltd.
                <br />
                All rights reserved.
              </p>
            </div>

            <div className="col-12 col-md-3">
              <p className="fw-bold">Company</p>
              <a
                href="about"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                About
              </a>
              <a
                href="product"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Products
              </a>
              <a
                href="Pricing"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Pricing
              </a>
              <a
                href="programme"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Referral programme
              </a>
              <a
                href="Careers"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Careers
              </a>
              <a
                href="Zerodha"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Zerodha.tech
              </a>
              <a
                href="Press"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Press & media
              </a>
              <a
                href="Zerodha"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Zerodha cares (CSR)
              </a>
            </div>

            <div className="col-12 col-md-3">
              <p className="fw-bold">Support</p>
              <a
                href="Contact"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Contact
              </a>
              <a
                href="Support"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Support portal
              </a>
              <a
                href="Connect"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Z-Connect blog
              </a>
              <a
                href="List of charges"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                List of charges
              </a>
              <a
                href="Downloads"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Downloads & resources
              </a>
            </div>

            <div className="col-12 col-md-3">
              <p className="fw-bold">Account</p>
              <a
                href="account"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Open an account
              </a>
              <a
                href="transfer"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                Fund transfer
              </a>
              <a
                href="challenge"
                className="d-block mb-1 text-decoration-none text-muted"
              >
                60 day challenge
              </a>
            </div>
          </div>

          <div className="mt-5 disclaimer-text">
            <p>
              Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
              no.: INZ000031633 CDSL: Depository services through Zerodha
              Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
              Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025
              – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
              Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
              Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
              India. For any complaints pertaining to securities broking please
              write to complaints@zerodha.com, for DP related to dp@zerodha.com.
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
