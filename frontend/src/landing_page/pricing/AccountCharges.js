import React from "react";

function AccountCharges() {
  return (
    <div
      className="container"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px 40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Account Opening Charges Section */}
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Charges for account opening
        </h1>

        <div className="table-responsive">
          <table
            className="account-table"
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <thead>
              <tr style={{ fontWeight: "bold" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 15px",
                    width: "60%",
                  }}
                >
                  Type of account
                </th>
                <th style={{ textAlign: "left", padding: "12px 15px" }}>
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Online account
                </td>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  FREE
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Offline account
                </td>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  FREE
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  NRI account (offline only)
                </td>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  ₹500
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 15px" }}>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td style={{ padding: "12px 15px" }}>₹500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Value Added Services Section */}
      <div>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Charges for optional value added services
        </h1>

        <div className="table-responsive mb-5">
          <table className="services-table" style={{ width: "100%" }}>
            <thead>
              <tr style={{ fontWeight: "bold" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 15px",
                    width: "30%",
                  }}
                >
                  Service
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 15px",
                    width: "30%",
                  }}
                >
                  Billing Frequency
                </th>
                <th style={{ textAlign: "left", padding: "12px 15px" }}>
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Tickertape
                </td>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Monthly / Annual
                </td>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Free: 0 | Pro: 249/2399
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Smallcase
                </td>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Per transaction
                </td>
                <td
                  style={{
                    padding: "12px 15px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Buy & Invest More: 100 | SIP: 10
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 15px" }}>Kite Connect</td>
                <td style={{ padding: "12px 15px" }}>Monthly</td>
                <td style={{ padding: "12px 15px" }}>
                  Connect: 500 | Historical: 500
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .container {
          padding-left: 2rem;
          padding-right: 2rem;
        }

        .table-responsive {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        table {
          border-collapse: collapse;
          width: 100%;
          min-width: 600px;
        }

        th,
        td {
          padding: 12px 15px;
          text-align: left;
        }

        thead {
          background-color: #f8f9fa;
        }

        tbody tr:not(:last-child) {
          border-bottom: 1px solid #eee;
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          h1 {
            font-size: 20px;
          }

          table {
            min-width: 100%;
            font-size: 14px;
          }

          th,
          td {
            padding: 8px 10px;
          }
        }

        @media (min-width: 992px) {
          .container {
            max-width: 1000px;
          }
        }
      `}</style>
    </div>
  );
}

export default AccountCharges;
