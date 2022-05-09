import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  NavLogoMobile,
  NavLogoLargeScreen,
} from "../../assets/RequiredData/Svgs";

const Index = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  console.log(window);
  function disableBodyScroll() {
    document.getElementsByTagName("body")[0].classList.add("stop-scroll");
  }
  function enableBodyScroll() {
    document.getElementsByTagName("body")[0].classList.remove("stop-scroll");
  }
  useEffect(() => {
    if (isNavActive) disableBodyScroll();
    else enableBodyScroll();
  }, [isNavActive]);

  return (
    <>
      <nav className={isNavActive ? "navigation nav-active" : "navigation"}>
        <div
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
        </div>
        <div className="nav-content">
          <div className="nav-logo-menu">
            <div className="nav-logo">
              <Link to={"/"}>
                Investors<span>club </span>
              </Link>
              <div className="logo-small-screen">
                <NavLogoMobile />
              </div>
            </div>
            <div className="nav-menu">
              <Link to={"/buy-online-business"} href="#">
                buy
              </Link>
              <Link to={"/sell-your-website"} href="#">
                sell
              </Link>
              <Link to={"/premium"} className="premium">premium</Link>
            </div>
          </div>
          <div className="nav-btn">
            <button className="btn-primary">Login</button>
            <button className="btn-secondary">create free account</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Index;
