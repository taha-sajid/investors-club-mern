import React from "react";
import cardData from "../../assets/RequiredData/BuyPageCardData";
import "./Cards.css";

const index = () => {
  return (
    <div className="cards-section">
      <div className="heading">
        <h1>
          Because buying a website shouldn't mean dumpster diving, massive fees,
          or hours of analysis.
        </h1>
      </div>
      <div className="cards">
        <div className="card-container">
          {cardData.map((card) => {
            const { heading, description, note, button, icon } = card;
            return (
              <div className="card">
                <i>{icon}</i>
                 <div className="card-heading">
                  <h3>{heading} </h3>
                </div>
                <div className="card-description">
                  <p>{description}</p>
                  {button && <button className="btn-primary">{button}</button>}
                </div>
                <div className="card-note">
                  <p>{note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
