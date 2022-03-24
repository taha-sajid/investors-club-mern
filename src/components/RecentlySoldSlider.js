import React, { useState } from "react";
import "./RecentlySoldSlider.css";
import { ImPriceTags } from "react-icons/im";
import { IoIosPricetag } from "react-icons/io";
const RecentlySoldSlider = () => {
  const [slider, setSlider] = useState(0);
  
  return (
    <div className="recently-sold">
      <div className="heading">
        <i>
          <ImPriceTags />
        </i>
        <h1>Recently Sold</h1>
      </div>
      <div className="slider">
        <div className="slide">
          <div className="data">
            <p className="date">March 2022</p>
            <p>PETS</p>
          </div>
          <div className="sold-price">
            <IoIosPricetag className="icon" />
            <p>$90,000</p>
          </div>
        </div>
        <div className="slide">
          <div className="data">
            <p className="date">March 2022</p>
            <p>PETS</p>
          </div>
          <div className="sold-price">
            <IoIosPricetag className="icon" />
            <p>$30,000</p>
          </div>
        </div>

        <div className="slide">
          <div className="data">
            <p className="date">March 2022</p>
            <p>PETS</p>
          </div>
          <div className="sold-price">
            <IoIosPricetag className="icon" />
            <p>$15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlySoldSlider;
