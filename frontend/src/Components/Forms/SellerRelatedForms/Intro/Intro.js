import React from "react";
import "./Intro.css";
import { businessInfo } from "../../../../assets/RequiredData/FormData";
import { Link } from "react-router-dom";

import {
  ContentSiteSVG,
  EcommerceSiteSVG,
} from "../../../../assets/RequiredData/Svgs";
const Intro = () => {
  const { heading, description, button } = businessInfo;
  return (
    <main className="intro-container form-container">
      <div className="form-section">
        <p>{description}</p>
        <div className="site-type">
          <Link to={"/sell-your-website/content/step-1"}>
            <div className="card content">
              <ContentSiteSVG />
              <h3>Sell Websites</h3>
            </div>
          </Link>
          <Link to={"/sell-your-service/step-1"}>
            <div className="card e-commerce">
              <EcommerceSiteSVG />
              <h3>Sell Services</h3>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Intro;
