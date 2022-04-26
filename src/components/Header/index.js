import React, { useState } from "react";
import "./Header.css";
import url from "../../assets/hero-image.png";
import Navbar from "../Navbar";
import { BsCheck2 } from "react-icons/bs";
const Header = () => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="header">
      <Navbar />
      {showHeader && (
        <div className="header-section">
          <div className="header-content">
            <div className="header-content-heading">
              <h1>
                Buy or sell profitable online businesses privately, with...
              </h1>
            </div>
            <div className="header-content-features">
              <div className="feature">
                <i>
                  <BsCheck2 className="header-icons" />
                </i>
                <p>100% EXCLUSIVE LISTINGS</p>
              </div>
              <div className="feature">
                <i>
                  <BsCheck2 className="header-icons" />
                </i>
                <p>NO BUYER FEES</p>
              </div>
              <div className="feature">
                <i>
                  <BsCheck2 className="header-icons" />
                </i>
                <p>DONE-FOR-YOU LEGAL DOCS</p>
              </div>
              <div className="feature">
                <i>
                  <BsCheck2 className="header-icons" />
                </i>
                <p>NO-FEE TRANSFER, INSPECTION, & ESCROW</p>
              </div>
              <div className="feature">
                <i>
                  <BsCheck2 className="header-icons" />
                </i>
                <p>DEEPER DUE DILIGENCE (see sample )</p>
              </div>
            </div>
            <p className="header-note">
              Investors Club is a members-only marketplace that works harder to
              help buyers and sellers profit.
            </p>
          </div>
          <div className="header-image">
            <img src={url} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
