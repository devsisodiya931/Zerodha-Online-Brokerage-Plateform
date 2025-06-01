import React from "react";
import { Link } from "react-router-dom";

function Table() {
  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Equity
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Currency
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Commodity
          </a>
        </li>
      </ul>

      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th> </th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&amp;O - Futures</th>
              <th>F&amp;O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Brokerage</th>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <th>STT/CTT</th>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td>
                <ul className="list-unstyled mb-0">
                  <li>0.125% of intrinsic value on bought/exercised options</li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Transaction charges</th>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00173% <br />
                BSE: 0
              </td>
              <td>
                NSE: 0.03503% (on premium) <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr>
              <th>GST</th>
              <td colSpan="4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <th>SEBI charges</th>
              <td colSpan="4">₹10 / crore</td>
            </tr>
            <tr>
              <th>Stamp charges</th>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        className="text-center px-3 mt-4 fw-semibold"
        style={{
          fontSize: "clamp(14px, 2.5vw, 20px)",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <Link className="text-decoration-none" to="calculate">
          Calculate your costs upfront
        </Link>{" "}
        using our brokerage calculator
      </p>
    </div>
  );
}

export default Table;
