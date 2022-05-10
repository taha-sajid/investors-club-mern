import React from "react";
import "./LatestEdition.css";

const LatestEdition = ({ cardData }) => {
  console.log(cardData);
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
          {cardData.map((card, index) => {
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

  
      </div>
    </>
  );
};

export default LatestEdition;
