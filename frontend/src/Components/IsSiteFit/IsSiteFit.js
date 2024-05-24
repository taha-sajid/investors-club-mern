import React from "react";
import "./IsSiteFit.css";
const index = () => {
  return (
    <section className="is-site-fit-section">
      <div className="is-site-fit-container">
        <div className="heading">
          <img
            src="https://investors.club/static/media/feature-icon-shake.d0debed0.svg"
            alt=""
          />
          <h1>Is your site a fit for Investors Club?</h1>
          <p className="slogon">Our criteria are simple:</p>
        </div>
        <div className="main-content">
          <div className="buttons">
            <button className="btn-primary">for content sites</button>
            <button className="btn-primary btn">for e-commerce sites</button>
          </div>
          <div className="cards">
            <div className="card">
              <span>
                <p> 1</p>
              </span>
              <p>
                Site content must be in <strong> English </strong>
              </p>
            </div>
            <div className="card">
              <span>
                <p> 2 </p>
              </span>
              <p>
                Minimum <strong> $500/mo </strong> <div> in revenue</div>
              </p>
            </div>
            <div className="card">
              <span>
                <p> 3</p>
              </span>
              <p>
                At least <strong>6 months</strong> of verifiable revenue and
                traffic.
              </p>
            </div>
          </div>
          <p>
            Find out more details about the criteria in our{" "}
            <strong> FAQs</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
