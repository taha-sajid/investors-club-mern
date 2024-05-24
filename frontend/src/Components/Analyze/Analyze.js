import React, { useState } from "react";
import { PolygonSVG } from "../../assets/RequiredData/Svgs";
import "./Analyze.css";
import TrafficOverview from "./TrafficOverview/TrafficOverview";
import BusinessAnalysis from "./BusinessAnalysis/BusinessAnalysis";
import SiteInformation from "./SiteInformation/SiteInformation";
const Index = () => {
  // States for graph that show on buy page
  const [openFinance, setOpenFinance] = useState(false);
  const [openTraffic, setOpenTraffic] = useState(true);
  const [openBusiness, setOpenBusiness] = useState(false);
  const [openSiteInformation, setOpenSiteInformation] = useState(false);
  return (
    <>
      <div className="analyze-section">
        <div className="analyze-container">
          <div className="analyze-data-container">
            <div className="analyze-sidebar">
              <h4>what's covered?</h4>
              <ul>
                <li
                  className={
                    openFinance
                      ? "analyze-sidebar-list active-sidebar"
                      : "analyze-sidebar-list"
                  }
                  onClick={() => {
                    setOpenFinance(true);
                    setOpenSiteInformation(false);
                    setOpenBusiness(false);
                    setOpenTraffic(false);
                  }}
                >
                  finance overview
                </li>
                <li
                  className={
                    openTraffic
                      ? "analyze-sidebar-list active-sidebar"
                      : "analyze-sidebar-list"
                  }
                  onClick={() => {
                    setOpenFinance(false);
                    setOpenSiteInformation(false);
                    setOpenBusiness(false);
                    setOpenTraffic(true);
                  }}
                >
                  traffic overview
                </li>
                <li
                  className={
                    openBusiness
                      ? "analyze-sidebar-list active-sidebar"
                      : "analyze-sidebar-list"
                  }
                  onClick={() => {
                    setOpenFinance(false);
                    setOpenSiteInformation(false);
                    setOpenBusiness(true);
                    setOpenTraffic(false);
                  }}
                >
                  business analysis
                </li>
                <li
                  className={
                    openSiteInformation
                      ? "analyze-sidebar-list active-sidebar"
                      : "analyze-sidebar-list"
                  }
                  onClick={() => {
                    setOpenFinance(false);
                    setOpenSiteInformation(true);
                    setOpenBusiness(false);
                    setOpenTraffic(false);
                  }}
                >
                  site information
                </li>
              </ul>
            </div>
            <div className="analyze-info-container">
              <div className="analyze-slogon">
                <i>
                  <PolygonSVG />
                </i>
                {openFinance && (
                  <p>
                    See a clear history of revenue, expenses, and sources of
                    monetization that you can trust.
                  </p>
                )}
                {openTraffic && (
                  <p>
                    Analyze trends in page views and unique visitors with notes
                    explaining any shifts.
                  </p>
                )}
                {openBusiness && <p>Business overview text.</p>}
                {openSiteInformation && (
                  <p>
                    Exprienced SEOs asses domain strength, content quality,
                    backlinks, wayback history, and more.
                  </p>
                )}
              </div>
              <div className="analyze-info">
                {openFinance && <TrafficOverview />}
                {openTraffic && <TrafficOverview />}
                {openBusiness && <BusinessAnalysis />}
                {openSiteInformation && <SiteInformation />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
