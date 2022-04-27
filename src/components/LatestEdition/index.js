import React from "react";
import "./LatestEdition.css";
import cardsData from "../../assets/RequiredData/LatestEditionCardData";

const LatestEdition = () => {
  return (
    <>
      <div className="latest-addition-section">
        <div className="heading">
          <h2>Our latest additions</h2>
          <p>
            New deals added constantly. Multiple industries, price points, and
            profit margins—but all vetted and proven money-makers.
          </p>
        </div>
        <div className="addition-cards-bunch">
          {cardsData.map((card, index) => {
            const { image, cardTag, averageRevenue, category, price } = card;
            return (
              <div className="addition-cards" key={index}>
                <p className="category">{category}</p>
                <div
                  className="addition-card"
                  style={{
                    background: ` linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(${image}) `,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                  }}
                >
                  <div className="card-tag">
                    <p>{cardTag}</p>
                  </div>
                  <div className="card-data">
                    <div className="price">${price}</div>
                    <div className="description">
                      Avg. monthly revenue: <span> {averageRevenue}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="current-position">
          <div className="asking-price">
            <div className="title">
              <span className="line"></span>
              <p> average asking price</p>
            </div>
            <h3>$107,938</h3>
          </div>
          <div className="active-listing">
            <div className="title">
              <span className="line"></span>
              <p>active listings</p>
            </div>
            <h3>33</h3>
          </div>
          <div className="multiple-listing">
            <div className="title">
              <span className="line"></span>
              <p>average listing multiple</p>
            </div>
            <h3>
              32<span>x</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestEdition;
