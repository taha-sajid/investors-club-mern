import React from "react";
import "./BuyerFeatures.css";
import cardData from "../../assets/RequiredData/FeaturesData";
const index = () => {
  return (
    <div className="features-section">
      <div className="features-container">
        <div className="heading">
          <h1>You won't pay a penny for...</h1>
        </div>
        <div className="features-cards">
          {cardData.map((card) => {
            const { heading, icon, description } = card;
            return (
              <div className="features-card">
                <i>{icon}</i>
                <h3>{heading}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <button className="btn-secondary btn-lg">create free account</button>
      </div>
    </div>
  );
};

export default index;
