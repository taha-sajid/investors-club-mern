import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="main-nav">
      <div className="nav-logo">
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
