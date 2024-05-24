import React from "react";
import "./Footer.css";
import { LogoFooter } from "../../assets/RequiredData/Svgs";
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
              <LogoFooter />
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
            <a href="/sell-your-website">Sell My Website</a>
            <a href="buy-online-business">Buy a Website</a>
            <span>Blog</span>
            <span>About us</span>
            <a href="/contact">Contact</a>
          </div>
          <div className="terms-and-conditions-link">
            <span>Sellers FAQ</span>
            <span>Buyers FAQ</span>
            <span>Privacy Policy</span>
            <span>Terms And Conditions</span>
            <span>Affiliates</span>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            Copyright 2024 by Investors Club LLC. All rights reserved. <br /> A
            part of the Sharp Capital Group.
          </p>
          <h5>Version: v4.19.0</h5>
        </div>
      </div>
      <div className="footer-bottom-line"></div>
    </>
  );
};

export default Footer;
