import React, { useState } from "react";
import "./Navbar.css";
import { NavLogo } from "./Svgs";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

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
          <NavLogo className="logo-mobile" />

          <h4>
            Investors<span>club </span>
          </h4>
          <a
          // style={
          //   isNavActive ? `${{ display: "block" }}` : `${{ display: "none" }}`
          // }
          >
            buy
          </a>
          <a>sell</a>
        </div>
        <div className="nav-btn">
          <button className="login">login</button>
          <button className="sign-up">sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
