import React from "react";
import "./FreeResources.css";
import cardData from "../../assets/RequiredData/FreeResourcesData";
const FreeResources = () => {
  return (
    <div className="resources-section">
      <div className="heading">
        <h1>Must-reads and free resources</h1>
      </div>
      <div className="free-resources-cards">
        {cardData.map((card, index) => {
          const { title, description, image } = card;

          return (
            <div className="resources-card" key={index}>
              <img src={image} alt="" />
              <div className="resources-card-data">
                <h3 className="title">{title}</h3>
                <h4 className="description">{description}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreeResources;
