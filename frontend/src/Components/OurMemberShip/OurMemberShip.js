import React from "react";
import "./OurMemberShip.css";
import data from "../../assets/RequiredData/OurMemberShipData";
const index = () => {
  return (
    <section className="our-membership-section">
      <div className="our-membership-container">
        <div className="heading">
          <h1>How our memberships compare</h1>
          <p>
            Accelerate your deaflow with a Premium membership - See our options
            below
          </p>
        </div>
        <div className="main-content">
          <div className="buttons">
            <button className="btn-secondary">Annual</button>
            <button className="btn-secondary">lifetime</button>
          </div>
          <div className="main-data hidden">
            <div className="package-details">
              {data.map((mydata, index) => {
                const { data, id, badge } = mydata;
                return (
                  <div className={`table-row row-${id}`} key={index}>
                    {badge ? <p className="badge">{badge}</p> : ""}
                    <p> {data}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="btn-secondary btn-lg">upgrade</button>
          <button>Register here to get access.</button>
        </div>
      </div>
    </section>
  );
};

export default index;
