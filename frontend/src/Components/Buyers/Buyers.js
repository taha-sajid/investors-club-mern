import React from "react";
import "./Buyers.css";
import ImageData from "../../assets/RequiredData/BuyersImageData";
import CardData from "../../assets/RequiredData/BuyersCardData";
const Buyers = () => {
  return (
    <div className="buyers">
      <div className="buyers-section-heading">
        <h1>Skip amateur hour and keep more of your money.</h1>
      </div>
      <div className="buyers-section-content">
        <div className="buyers-card">
          <div className="buyers-card-heading">
            <h2> Buyers</h2>
            <p> Everything you hate about buying from big brokers: solved.</p>
          </div>
          <div className="investing-reason">
            {CardData.map((card, index) => {
              const { title, icon, description, button } = card;
              return (
                <div className="buyer-features-card" key={index}>
                  <div className="features-icon">
                    <i>{icon}</i>
                  </div>
                  <div className="features-data">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    {button && (
                      <button className="btn-primary">Sample Report</button>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="features-data exclusive">
              <button className="btn-primary btn-lg">Explore Membership</button>
              <p>Exclusive & direct.</p>
            </div>
          </div>
        </div>
        <div className="buyers-images">
          <div className="buyers-image-heading">
            <h2> Nobody offers deeper due diligence </h2>
            <p> Every detail: expertly audited and at your fingertips</p>
          </div>

          {ImageData.map((item, index) => {
            const { img, title, description } = item;
            return (
              <div className="background-image" key={index}>
                <div className="seo-analysis">
                  <div className="heading">
                    <h1>{title}</h1>
                  </div>
                  <div className="description">
                    <p> {description} </p>
                  </div>
                </div>
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Buyers;
