import React, { useEffect, useState, useRef } from "react";

// IMPORT REQUIRED ICONS
import { Link, useLocation } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { NotificationSVG } from "../../assets/RequiredData/Svgs";
import {
  NavLogoMobileWhite,
  NavLogoMobileBlue,
  NavLogoLargeScreenWhite,
  NavLogoLargeScreenBlue,
} from "../../assets/RequiredData/Svgs";
import { useSelector } from "react-redux";

// IMPORT STYLE CSS FILE
import "./Navbar.css";

// IMPORT COMPONENTS
import NavNotification from "../NavNotification/NavNotification";
import NavInbox from "../NavInbox/NavInbox";

const Index = () => {
  // isNavActive checks Nav Togglebar
  const [isNavActive, setIsNavActive] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const { isLoading, isLoggedIn, currentUser } = useSelector(
    (state) => state.auth
  );
  // const isLoggedIn = true;
  // Check what the current page is
  const location = useLocation();
  const pathName = location.pathname.split("/");
  const currentPage = pathName[1];

  const isNavWhite =
    currentPage === "account" ||
    currentPage === "login" ||
    currentPage === "listings";

  let navWhite = ""; // Default navbar class

  // Using as a reference of notification & message DOM element
  const notificationRef = useRef(null);
  const messageRef = useRef(null);

  // Check the current location and assign the appropriate class
  if (
    currentPage === "account" ||
    currentPage === "login" ||
    currentPage === "listings"
  ) {
    navWhite = "nav_white";
  }

  // console.log(navWhite, "className");
  // console.log(location.pathname);

  // This function is for disabling background scrolling when the nav toggle open
  function disableBodyScroll() {
    document.getElementsByTagName("body")[0].classList.add("stop-scroll");
  }

  // This function is for enabling background scrolling when the nav toggle open
  function enableBodyScroll() {
    document.getElementsByTagName("body")[0].classList.remove("stop-scroll");
  }

  // Run whenever user toggle navbar
  useEffect(() => {
    if (isNavActive) disableBodyScroll();
    else enableBodyScroll();
  }, [isNavActive]);

  // Handle outside click of Inbox & Notification box
  useEffect(() => {
    const handleClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
      if (messageRef.current && !messageRef.current.contains(event.target)) {
        setIsMessageOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  });
  console.log(isLoggedIn);
  return (
    <>
      <nav
        className={
          isNavActive ? "navigation nav-active" : `navigation ${navWhite}`
        }
      >
        {/* Navbar toggle */}
        <div
          className={isNavActive ? "nav-toggle nav-active" : "nav-toggle"}
          onClick={() => {
            setIsNavActive((prev) => !prev);
          }}
        >
          <button className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
          </button>
        </div>

        {/*MAIN NAVBAR */}
        <div className="nav-content">
          <div className="nav-logo-menu">
            <div className="nav-logo">
              <Link to={"/"}>
                {isNavWhite ? (
                  <NavLogoLargeScreenBlue />
                ) : (
                  <NavLogoLargeScreenWhite />
                )}
              </Link>
              <div className="logo-small-screen">
                <Link to={"/"}>
                  {isNavWhite ? <NavLogoMobileBlue /> : <NavLogoMobileWhite />}
                </Link>
              </div>
            </div>
            <div className="nav-menu">
              <Link to={"/buy-online-business"} className={"visited-link"}>
                buy
              </Link>
              <Link to={"/sell-your-website"} className={"visited-link"}>
                sell
              </Link>
              <Link to={"/listings"}>Listings</Link>
              <Link to={"/premium"} className="premium ">
                premium
              </Link>
            </div>
          </div>
          {!isLoggedIn && (
            <div className="nav-btn">
              <Link to={"/login"}>
                <button className={"btn-ghost"}>Login</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn-secondary">create free account</button>
              </Link>
            </div>
          )}

          {/* If user is Login then this code will render */}
          {isLoggedIn && (
            <div className="login-nav-btn">
              <Link to={"/financial-info"} className="user-options">
                Check Application Status
              </Link>

              <Link to={"/account/offers"} className="avatar margin--left__sml">
                <i>
                  <BsFillPersonFill />
                </i>
                <p> {currentUser.name && currentUser.name}</p>
              </Link>

              {/* MESSAGE toggle */}
              <div className="message-icon avatar-message" ref={messageRef}>
                <Link
                  onClick={() => {
                    setIsMessageOpen(!isMessageOpen);
                  }}
                >
                  <i>
                    <MdEmail />
                  </i>
                </Link>
                <div
                  className={
                    isMessageOpen ? `toggle-active` : "toggle-inactive"
                  }
                >
                  {isMessageOpen && <NavInbox />}
                </div>
              </div>

              {/* NOTIFICATION toggle */}
              <div
                className="notification-icon avatar-notification"
                ref={notificationRef}
              >
                <Link
                  onClick={() => {
                    setIsNotificationOpen(!isNotificationOpen);
                  }}
                >
                  <i>
                    <NotificationSVG />
                  </i>
                </Link>
                <div
                  className={
                    isNotificationOpen ? `toggle-active` : "toggle-inactive"
                  }
                >
                  {isNotificationOpen && <NavNotification />}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Index;
