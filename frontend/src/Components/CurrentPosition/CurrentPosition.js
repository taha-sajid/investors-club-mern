import React from "react";
import "./CurrentPosition.css";
const index = () => {
  return (
    <>
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
    </>
  );
};

export default index;
