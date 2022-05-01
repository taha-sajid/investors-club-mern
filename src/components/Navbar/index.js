import React, { useState } from "react";
import "./Navbar.css";
import {
  NavLogoMobile,
  NavLogoLargeScreen,
} from "../../assets/RequiredData/Svgs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(true);
  return (
    <div className="main-nav">
      <nav
        className={isNavActive ? "nav-toggle nav-active" : "nav-toggle"}
        onClick={() => {
          setIsNavActive(true);
          console.log("click");
        }}
      >
        <button className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
        </button>
      </nav>
      <div className="nav-content">
        <div className="nav-logo">
          <NavLogoMobile className="logo-mobile" />
          <Link to={"/"}>
            {/* <NavLogoLargeScreen className="logo-large" /> */}
            <h4>
              Investors<span>club </span>
            </h4>
          </Link>
          <Link to="/buy">buy</Link>
          <Link to="/sell">sell</Link>
          <Link to={"/premium"}>Premium</Link>
        </div>
        <div className="nav-btn">
          <button className="login">login</button>
          <button className="btn-secondary">sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
