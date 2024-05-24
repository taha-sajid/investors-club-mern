import React from "react";
import "./SellerFeatures.css";
import cardData from "../../assets/RequiredData/SellerFeatursCardData";

const index = () => {
  return (
    <section className="seller-features-section">
      <div className="seller-features-container">
        <div className="seller-features-heading">
          <h1>
            Lower fees. Better buyers. Hands-on help. It's a no-brainer for
            smart sellers.
          </h1>
        </div>
        <div className="seller-features-card-container">
          {cardData.map((card) => {
            const { heading, highlights, icon, note } = card;
            return (
              <div className="seller-features-card">
                <img src={icon} alt="" />
                <h3>{heading}</h3>
                {highlights.map((highlight) => {
                  return <p>{highlight}</p>;
                })}
                <h4>{note}</h4>
              </div>
            );
          })}
        </div>
        <div className="highlight-container">
          <h2>
            Work with business-selling experts commited to seeing you richer,
            faster.
          </h2>
          <div className="highlight-buttons">
            <button className="btn-secondary btn-lg">Sell my business</button>
            <button className="btn-secondary btn-lg">try valuation tool</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
