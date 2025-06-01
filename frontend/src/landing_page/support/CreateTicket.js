import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  // Inject Font Awesome via JS for icons
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const categories = [
    {
      icon: "fa-user-circle",
      title: "Account Opening",
      items: [
        { name: "Resident individual", path: "/Resident individual" },
        { name: "Minor", path: "/Minor" },
        { name: "Non Resident Indian (NRI)", path: "/Non Resident Indian (NRI)" },
        { name: "Company, Partnership, HUF and LLP", path: "/Company, Partnership, HUF and LLP" },
        { name: "Glossary", path: "/Glossary" },
      ],
    },
    {
      icon: "fa-id-card",
      title: "Your Zerodha Account",
      items: [
        { name: "Your Profile", path: "/Your Profile" },
        { name: "Account modification", path: "/Account modification" },
        { name: "Client Master Report (CMR) and Depository Participant (DP)", path: "/Client Master Report (CMR) and Depository Participant (DP)" },
        { name: "Nomination", path: "/Nomination" },
      ],
    },
    {
      icon: "fa-chart-line",
      title: "Kite",
      items: [
        { name: "IPO", path: "/IPO" },
        { name: "Margin Trading Facility (MTF) and Margins", path: "/Margin Trading Facility (MTF) and Margins" },
        { name: "Charts and orders", path: "/Charts and orders" },
        { name: "Alerts and Nudges", path: "/Alerts and Nudges" },
      ],
    },
    {
      icon: "fa-wallet",
      title: "Funds",
      items: [
        { name: "Add money", path: "/Add money" },
        { name: "Withdraw money", path: "/Withdraw money" },
        { name: "Add bank accounts", path: "/Add bank accounts" },
        { name: "eMandates", path: "/eMandates" },
      ],
    },
    {
      icon: "fa-desktop",
      title: "Console",
      items: [
        { name: "Tax P&L", path: "/tax-pl" },
        { name: "Portfolio", path: "/Portfolio" },
        { name: "Corporate actions", path: "/Corporate actions" },
        { name: "Funds statement", path: "/Funds statement" },
        { name: "Reports", path: "/Reports" },
      ],
    },
    {
      icon: "fa-coins",
      title: "Coin",
      items: [
        { name: "Understanding mutual funds and Coin", path: "/Understanding mutual funds and Coin" },
        { name: "Coin app", path: "/Coin app" },
        { name: "Coin web", path: "/Coin web" },
        { name: "Transactions and reports", path: "/Transactions and reports" },
      ],
    },
  ];

  return (
    <div className="create-ticket-wrapper mb-5">
      <style>{`
        .create-ticket-wrapper {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: auto;
        }

        .ticket-title {
          font-size: 1.75rem;
          text-align: center;
          margin-bottom: 2rem;
          font-weight: 600;
          color: #222;
        }

        .ticket-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .ticket-card {
          background: #fdfdfd;
          border-radius: 12px;
          padding: 1.2rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
          transition: transform 0.2s ease;
        }

        .ticket-card:hover {
          transform: translateY(-5px);
        }

        .ticket-heading {
          display: flex;
          align-items: center;
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #333;
        }

        .ticket-heading .icon {
          font-size: 1.3rem;
          margin-right: 0.5rem;
          color: #1e88e5;
        }

        .ticket-link {
          display: block;
          margin-bottom: 0.5rem;
          color: #444;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ticket-link:hover {
          color: #1e88e5;
        }

        @media (max-width: 600px) {
          .ticket-title {
            font-size: 1.5rem;
          }

          .ticket-card {
            padding: 1rem;
          }

          .ticket-heading {
            font-size: 1rem;
          }
        }
      `}</style>

      <h1 className="ticket-title">To create a ticket, select a relevant topic</h1>
      <div className="ticket-grid">
        {categories.map((cat, index) => (
          <div className="ticket-card" key={index}>
            <h5 className="ticket-heading">
              <i className={`fas ${cat.icon} icon`}></i>
              {cat.title}
            </h5>
            {cat.items.map((item, idx) => (
              <Link key={idx} to={item.path} className="ticket-link">
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
