import React from "react";
import "./HowItFeels.css";
const index = () => {
  return (
    <section className="how-it-feels-section">
      <div className="how-it-feels-container">
        <div className="heading">
          <h1> What does selling with Investors Club feel like?</h1>
        </div>
        <div className="cards">
          <div className="card">
            <img
              src="https://investors.club/static/media/deco-piggybank.dcd727d0.svg"
              alt=""
            />
            <div className="data">
              <div className="heading">
                <h2>Profitable</h2>
              </div>
              <div className="description">
                You'll save at least 8% compared to other brokers. (Yeah, they
                hate us.)
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://investors.club/static/media/deco-speed.5df95283.svg"
              alt=""
            />
            <div className="data">
              <div className="heading">
                <h2>Fast</h2>
              </div>
              <div className="description">
                Your website is listed to buyers within 7 days or less. No
                month-long wait times to go live
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://investors.club/static/media/deco-doc.8ff64906.svg"
              alt=""
            />
            <div className="data">
              <div className="heading">
                <h2>Frictionless</h2>
              </div>
              <div className="description">
                Zero-cost valuation, transfer, inspection, and escrow are
                included with every deal.
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://investors.club/static/media/deco-calendar.b87cfbd5.svg"
              alt=""
            />
            <div className="data">
              <div className="heading">
                <h2>Sold</h2>
              </div>
              <div className="description">
                Other brokers give the buyer 4 weeks to monitor the site after
                it's sold before making their final decision. We verify
                everything and provide deal closure within 7 days or less.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
