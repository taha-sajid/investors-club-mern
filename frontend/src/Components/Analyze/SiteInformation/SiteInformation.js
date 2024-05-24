import React from "react";
import {
  QuestionMarkSVG,
  SuccessSVG,
  AllertSVG,
} from "../../../assets/RequiredData/Svgs";
import "./SiteInformation.css";
import {
  domainStrengthData,
  spamSignalsData,
} from "../../../assets/RequiredData/SiteInformationData";
const index = () => {
  return (
    <div className="site-information-container">
      <h2 className="site-information-container-heading"> Site information</h2>

      <div className="domain-data-container">
        <h3>Domain strength / metrics</h3>
        <div className="domain-data-container-content">
          {domainStrengthData.map((data, index) => {
            const { heading, totalValue, value } = data;
            return (
              <div className="domain-data" key={index}>
                <div className="domain-data-heading">
                  <h6>{heading}</h6>
                  <i>
                    <QuestionMarkSVG />
                  </i>
                </div>
                <div className="domain-data-value">
                  {value ? (
                    <p>
                      {value} <span>/{totalValue}</span>
                    </p>
                  ) : (
                    <p className="non-alert">{totalValue}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="spam-signals-data-container">
        <h3>Spam signals</h3>
        <div className="allert-buttons">
          <div className="allert-button item-good">
            <i>
              <SuccessSVG />
            </i>
            <h4>Not that we've determined.</h4>
          </div>
          <div className="allert-button item-bad">
            <i>
              <AllertSVG />
            </i>
            <h4>Potentially, yes.</h4>
          </div>
        </div>
        {spamSignalsData.map((data, index) => {
          const { text, icon } = data;
          return (
            <div className="spam-signals-data-content" key={index}>
              <i>{icon}</i>
              <p>{text}</p>
            </div>
          );
        })}
      </div>

      <div className="site-information-half-data">
        <div className="site-information-half-data-heading">
          <div className="site-information-half-data-item-sub-heading">
            <h3>Wayback history</h3>
            <button className="btn-primary-light">2020 / 03</button>
          </div>
          <div className="site-information-half-data-item-report">
            <h3>Tech Stack</h3>
            <p>GoDaddy Hosting, GoDaddy Domain Registrar</p>
          </div>
        </div>
        <div className="seo-analys-reports-section">
          <div className="seo-analys-reports-heading">
            <h3>SEO analysis overview</h3>
            <p>Available for Premium users.</p>
          </div>
          <div className="seo-analys-reports-sub-report">
            <span className="seo-analys-reports-sub-report-bar">
              <span style={{ width: "50%" }}></span>
            </span>
            <button className="btn-primary-light">Report unavailable</button>
          </div>
        </div>
        <div className="seo-analys-reports-section">
          <div className="seo-analys-reports-heading">
            <h3>SEO analysis overview</h3>
            <p>Available for Premium users.</p>
          </div>
          <div className="seo-analys-reports-sub-report">
            <span className="seo-analys-reports-sub-report-bar">
              <span style={{ width: "60%" }}></span>
            </span>
            <button className="btn-primary-light">Report unavailable</button>
          </div>
        </div>
        <div className="seo-analys-reports-section">
          <div className="seo-analys-reports-heading">
            <h3>SEO analysis overview</h3>
            <p>Available for Premium users.</p>
          </div>
          <div className="seo-analys-reports-sub-report">
            <span className="seo-analys-reports-sub-report-bar">
              <span style={{ width: "80%" }}></span>
            </span>
            <button className="btn-primary-light">Report unavailable</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
