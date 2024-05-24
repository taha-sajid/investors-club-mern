import React from "react";
import "./JoinUsToday.css";
import { BsCheck2 } from "react-icons/bs";
import { GrStar } from "react-icons/gr";
import { StarSVG, StarSVGSmall } from "../../assets/RequiredData/Svgs";

const index = () => {
  return (
    <section className="join-us-today-section">
      <div className="join-us-today-container">
         <div className="join-us-today-heading">Join Investors Club Today</div>
        <div className="join-us-today-cards-container">
          <div className="join-us-today-card">
            <div className="card-header">
              <h2>Free Membership</h2>
              <p>
                For investors looking to scratch the surface in search of better
                deals and service than public brokers. You'll have access to:
              </p>
            </div>
            <div className="card-data-features">
              <p>
                <i>
                  <BsCheck2 />
                </i>
                Business type and niche
              </p>
              <p>
                <i>
                  <BsCheck2 />
                </i>
                Financial and traffic overview
              </p>
              <p>
                <i>
                  <BsCheck2 />
                </i>
                Basic business metrics
              </p>
              <p>
                <i>
                  <BsCheck2 />
                </i>
                Monetization methods
              </p>
              <p>
                <i>
                  <BsCheck2 />
                </i>
                Multiple and price
              </p>
            </div>
          </div>
          <d
          iv className="join-us-today-card">
            <div className="card-header">
              <h2>Premium upgrade</h2>
              <p>
                For serious investors who want to cherry-pick the best deals.
              </p>
              <div className="today-card-buttons">
                <div className="button-icon">
                  <StarSVGSmall />
                </div>
                <button>yearly</button>
                <button>lifetime</button>
              </div>
              <div className="card-price">
                <strike>
                  <h6>$747</h6>
                </strike>
                <h1>$373.5</h1>
              </div>
            </div>
            <div className="card-data-features">
              <h1>Everything in Free, plus...</h1>
              <p>
                <i>
                  <GrStar />
                </i>
                <span> Instant </span>access to every listing
              </p>
              <p>
                <i>
                  <GrStar />
                </i>
                <span> Free </span> detailed due diligence reports See sample
              </p>
              <p>
                <i>
                  <GrStar />
                </i>
                <span> First</span> access to new products and services
                (Lifetime only)
              </p>
            </div>

            <div className="premium-icon">  
              <StarSVG />
            </div>
          </d>
        </div>
        <h4>
          Your information will never be shared. Trusted by 4,000+ members.
        </h4>
        <div className="start-free-card">
          <div className="mera-image">
            <img
              src="https://investors.club/static/media/mega-plus-icon.0d770049.png"
              alt=""
            />
          </div>
          <div className="start-free-data">
            <h3>Start free and upgrade whenever you’re ready.</h3>
            <p>
              All Members enjoy done-for-you mediation, transfer, inspection,
              and no-fee escrow at zero cost.
            </p>
            <button className="btn-secondary btn-lg">
              Create Free Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
