import React from "react";
import "./Footer.css";
import { Logo } from "./Svgs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-icons">
          <div className="logo">
            <i>
              <Logo />
            </i>
          </div>
          <i>
            <FaFacebookF />
          </i>
          <i>
            <FaInstagram />
          </i>
          <i>
            <FaTwitter />
          </i>
          <i>
            <FaLinkedinIn />
          </i>
        </div>
        <div className="footer-links">
          <div className="main-links">
            <a href="">Sell My Website</a>
            <a href="">Buy a Website</a>
            <a href="">Blog</a>
            <a href="">About us</a>
            <a href="">Contact</a>
          </div>
          <div className="terms-and-conditions-link">
            <a href="">Sellers FAQ</a>
            <a href="">Buyers FAQ</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms And Conditions</a>
            <a href="">Affiliates</a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            Copyright 2022 by Investors Club LLC. All rights reserved. <br /> A part of
            the Sharp Capital Group.
          </p>
          <h5>Version: v2.55.4</h5>
        </div>
      </div>
      <div className="footer-bottom-line">
        
      </div>
    </>
  );
};

export default Footer;
