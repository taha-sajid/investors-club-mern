import React from "react";
import "./BusinessAnalysis.css";
import data from "../../../assets/RequiredData/BusinessAnalysisData";
import {
  BuzzLogicSVG,
  GrowNowSVG,
} from "../../../assets/RequiredData/Svgs";
const index = () => {
  return (
    <>
      <div className="business-analysis-container">
        <h2 className="business-analysis-container-heading">
          Business Overview
        </h2>
        {data.map((data, index) => {
          const { heading, icon, question, description } = data;
          return (
            <div className="business-analysis-data" key={index}>
              <div className="business-analysis-data-heading">
                <i>{icon}</i>
                <h2> {heading}</h2>
              </div>
              <div className="business-analysis-data-content">
                <p className="note">{question}</p>
                <p className="description">{description}</p>
              </div>
            </div>
          );
        })}
        <div className="business-analysis-data">
          <div className="business-analysis-data-heading">
            <h2> Earnings potential</h2>
          </div>
          <div className="business-analysis-data-content">
            <div className="earning-potential-note">NaN%</div>
            <div className="earning-potential-bar"></div>
            <div className="earning-potential-details">
              <div className="current-earning">
                <p>current earnings</p>
                <h3>$3,338</h3>
              </div>
              <div className="potential-earning">
                <p>current earnings</p>
                <h3>$NaN</h3>
              </div>
            </div>
            <div className="description">
              If you continue with this model of publishing hundreds of articles
              per month the site could rise easily. If you want to improve the
              conversion rate or add other types of monetization it will take a
              lot of your time and money but it could prove beneficial down the
              road. So this site is a perfect pick for proactive investors.
            </div>
          </div>
        </div>

        <div className="business-analysis-section-grow">
          <div className="buzz-logic">
            <i>
              <BuzzLogicSVG />
            </i>
            <h1>This website is eligible for our Operator service!</h1>
            <p>We can help you manage and grow this website post-purchase.</p>
          </div>
          <div className="grow-now">
            <i>
              <GrowNowSVG />
            </i>

            <p>
              If you'd like to learn more about our Operator service, click on
              the button below.
            </p>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
