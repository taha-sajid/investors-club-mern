import React from "react";
import "./Seller.css";
import CardData from "../../assets/RequiredData/SellerData";
import url from "../../assets/images/seller.jpg";
const Seller = () => {
  return (
    <div className="seller-section">
      <div className="seller-content">
        <div className="seller-heading">
          <h2>Sellers</h2>
        </div>
        <div className="seller-slogon">
          <p>
            Don't pay insane fees to lazy brokers. Sell faster, keep more
            profit, and get the VIP treatment.
          </p>
        </div>
      </div>
      <div className="seller-cards">
        {CardData.map((card, index) => {
          const { icon, title, description } = card;
          return (
            <div className="seller-card" key={index}>
              <i>{icon}</i>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>

      <div className="seller-slider-section">
        <div className="seller-buttons">
          <button className="btn-primary btn-lg">Sell My Business</button>
          <button className="btn-secondary btn-lg">try valuation tool</button>
        </div>
        <div className="seller-slider">
          <div className="seller-slide">
            <div className="customer-image">
              <img src={url} alt="" />
            </div>
            <div className="customer-data">
              <p className="description">
                I recently sold an affiliate website on Investors Club and the
                process was quick, simple, and very hands off. Andrej and the
                team definitely know what they are doing when it comes to online
                business;
              </p>
              <h4>Sammy Dolan</h4>
              <p className="field">Entrepreneur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
