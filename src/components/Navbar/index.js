import React, { useState } from "react";
import "./Navbar.css";
import {
  NavLogoMobile,
  NavLogoLargeScreen,
} from "../../assets/RequiredData/Svgs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  return (
    <div className={isNavActive ? "main-nav is-active" : "main-nav"}>
      <nav
        className={isNavActive ? "nav-toggle nav-active" : "nav-toggle"}
        onClick={() => {
          setIsNavActive((prev) => !prev);
          console.log("click");
        }}
      >
        <button className="hamburger">
          <span className="line1"></span>
          <span className="line2"></span>
        </button>
      </nav>
      <div className={isNavActive ? "nav-content nav-active" : "nav-content"}>
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
