import React, { useEffect, useState } from "react";
import "./RecentlySoldSlider.css";
import { ImPriceTags } from "react-icons/im";
import { IoIosPricetag } from "react-icons/io";
import sliderData from "./RecentlySoldSliderData";

const RecentlySoldSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentSlide < sliderData.length - 3) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 2000);
  }, [currentSlide]);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(windowDimensions.width);
  return (
    <div className="recently-sold">
      <div className="heading">
        <i>
          <ImPriceTags />
        </i>
        <h1>Recently Sold</h1>
      </div>
      <div className="slider">
        {sliderData.map((slide) => {
          const { date, category, id, price } = slide;
          return (
            <div
              className="slide"
              key={id}
              style={{
                marginLeft:
                  id === 1
                    ? `${
                        windowDimensions.width < 600
                          ? `-${currentSlide * 110.5}%`
                          : `-${currentSlide * 35.18}%`
                      } `
                    : undefined,
              }}
            >
              <div className="data">
                <p className="date">{date}</p>
                <p>{category}</p>
              </div>
              <div className="sold-price">
                <IoIosPricetag className="icon" />
                <p>${price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentlySoldSlider;
