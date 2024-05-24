import React from "react";
import {
  NavLogoLargeScreenWhite,
  TickSVG,
  CrossSVG,
} from "../../assets/RequiredData/Svgs";
import "./CompareUs.css";
const Index = () => {
  return (
    <section className="compare-us-section">
      <div className="compare-us-container">
        <div className="compare-us-heading">
          <h1>Go ahead: compare us to the “Other Guys“</h1>
           <p>We knew we were onto something when they started copying us.</p>
        </div>
        <div className="compare-us-cards-container">
          <div className="versus-container">
            <p>VS</p>
          </div>
          <div className="compare-us-card">
            <h3 className="card-heading">
              <NavLogoLargeScreenWhite />
            </h3>
            <div className="compare-card-data">
              <p>
                <i className="compare-icon">
                  <TickSVG />
                </i>
                Includes mediation, transfer, and inspection for a worry-free
                purchase
              </p>
              <p>
                <i className="compare-icon">
                  <TickSVG />
                </i>
                24-point due diligence incl. SEO, content, expert growth plan
              </p>
              <p>
                <i className="compare-icon">
                  <TickSVG />
                </i>
                Profitable off-market deals shared with a private community
              </p>
              <p>
                <i className="compare-icon">
                  <TickSVG />
                </i>
                We've got a small, experienced team to help make this easy for
                you
              </p>
              <p>
                <i className="compare-icon">
                  <TickSVG />
                </i>
                No-fee escrow with fast turnarounds and no requirements
              </p>
            </div>
          </div>
          <div className="compare-us-card">
            <h3 className="card-heading">"Big Popular Broker Site"</h3>
            <div className="compare-card-data">
              <p>
                <i className="compare-icon">
                  <CrossSVG />
                </i>
                We’ll help you migrate, but that’s it. Hope you don’t get
                screwed.
              </p>
              <p>
                <i className="compare-icon">
                  <CrossSVG />
                </i>
                Here are the basics. Good luck (and don't blame us!)
              </p>
              <p>
                <i className="compare-icon">
                  <CrossSVG />
                </i>
                Woosh! Hear that? It’s more profit disappearing on an escrow
                service.
              </p>
              <p>
                <i className="compare-icon">
                  <CrossSVG />
                </i>
                Enjoy competing with 20,000 tire-kickers for the few good deals!
              </p>
              <p>
                <i className="compare-icon">
                  <CrossSVG />
                </i>
                We’ve got huge teams we need to charge you massive overhead for.
              </p>
            </div>
          </div>
        </div>
        <button className="btn-primary btn-lg">Create Free Account</button>
      </div>
    </section>
  );
};

export default Index;
