import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div
      className="brokerage-container"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "23px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Charges explained
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column */}
        <div>
          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Securities/Commodities transaction tax
            </h2>
            <p style={{ marginBottom: "15px", lineHeight: "1.5" }}>
              Tax by the government when transacting on the exchanges.
              <br />
              Charged as above on both buy and sell sides when trading equity
              delivery. Charged only on selling side when trading intraday or on
              F&O.
            </p>
            <p style={{ lineHeight: "1.5" }}>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Transaction/Turnover Charges
            </h2>
            <p style={{ marginBottom: "15px", lineHeight: "1.5" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <ul
              style={{
                paddingLeft: "20px",
                marginBottom: "15px",
                lineHeight: "1.4",
              }}
            >
              <li style={{ marginBottom: "8px" }}>
                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups
                have been merged into a new group X w.e.f 01.12.2017)
              </li>
              <li style={{ marginBottom: "8px" }}>
                BSE has revised transaction charges in SS and ST groups to
                ₹1,00,000 per crore of gross turnover.
              </li>
            </ul>
          </div>

          <div className="charge-section">
            <h2
              style={{
                fontSize: "17px",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Call & trade
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.{" "}
            </p>
          </div>

          <div className="charge-section">
            <h2
              style={{
                fontSize: "17px",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Stamp charges{" "}
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.{" "}
            </p>
          </div>

          <div className="charge-section">
            <h2
              style={{
                fontSize: "17px",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              NRI brokerage charges
            </h2>
            <ul style={{ lineHeight: "1.5" }}>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </div>

          <div className="charge-section">
            <h2
              style={{
                fontSize: "17px",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Account with debit balance
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
          </div>

          <div className="charge-section">
            <h2
              style={{
                fontSize: "17px",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h2>
            <ul style={{ lineHeight: "1.5" }}>
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </div>

          <div className="charge-section">
            <h2
              style={{
                fontSize: "17px",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Margin Trading Facility (MTF)
            </h2>
            <ul style={{ lineHeight: "1.5" }}>
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              GST
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              SEBI Charges
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              DP (Depository participant) charges
            </h2>
            <p style={{ marginBottom: "15px", lineHeight: "1.5" }}>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.5" }}>
              <li style={{ marginBottom: "8px" }}>
                Female demat account holders (as first holder) will enjoy a
                discount of ₹0.25 per transaction on the CDSL fee.
              </li>
              <li>
                Debit transactions of mutual funds & bonds get an additional
                discount of ₹0.25 on the CDSL fee.
              </li>
            </ul>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Pledging charges
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>
          </div>

          <div className="charge-section">
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              AMC (Account maintenance charges)
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA,{" "}
              <Link className="text-decoration-none">Click here </Link>
            </p>
            <p style={{ lineHeight: "1.5" }}>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC,{" "}
              <Link className="text-decoration-none">Click here </Link>
            </p>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Corporate action order charges
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Off-market transfer charges
            </h2>
            <p style={{ lineHeight: "1.5" }}>₹25 per transaction.</p>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Physical CMR request
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Payment gateway charges
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Delayed Payment Charges
            </h2>
            <p style={{ lineHeight: "1.5" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account.
              <Link className="text-decoration-none"> Learn more.</Link>
            </p>
          </div>

          <div className="charge-section" style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#444",
              }}
            >
              Trading using 3-in-1 account with block functionality
            </h2>
            <ul style={{ lineHeight: "1.5" }}>
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </div>
        </div>
       
      </div>
      <div>
       <h2 >Disclaimer</h2>
        <p className="mt-3">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>

        </div>

      <style>{`
        .brokerage-container {
          padding: 20px 40px;
        }

        h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        h2 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        p {
          margin-bottom: 15px;
          line-height: 1.5;
        }

        ul {
          padding-left: 20px;
          margin-bottom: 15px;
        }

        li {
          margin-bottom: 8px;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .brokerage-container {
            padding: 20px;
          }

          .brokerage-container > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          h1 {
            font-size: 22px;
          }

          h2 {
            font-size: 18px;
          }

          p,
          li {
            font-size: 15px;
          }
        }

        @media (min-width: 1200px) {
          .brokerage-container {
            max-width: 1200px;
          }
        }
      `}</style>
    </div>
  );
}

export default Brokerage;
