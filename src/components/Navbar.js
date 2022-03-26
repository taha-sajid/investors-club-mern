import React from "react";
import "./Navbar.css";
import { NavLogo } from "./Svgs";

const Navbar = () => {
  return (
    <div className="main-nav">
      <nav className="nav-toggle">
        <button className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
        </button>
      </nav>
      <div className="nav-logo">
        <NavLogo className="logo-mobile" />

        <h4>
          Investors<span>club </span>
        </h4>
        <a>buy</a>
        <a>sell</a>
      </div>
      <div className="nav-btn">
        <button className="login">login</button>
        <button className="sign-up">sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
