import React, { useEffect, useState } from "react";
import "./RecentlySoldSlider.css";
import { ImPriceTags } from "react-icons/im";
import { IoIosPricetag } from "react-icons/io";
import sliderData from "../../assets/RequiredData/RecentlySoldSliderData";

const RecentlySoldSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;                            
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (currentSlide < sliderData.length - 3) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 3500);
  }, [currentSlide]);
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
                        windowDimensions.width < 768
                          ? `-${currentSlide * 100}%`
                          : `-${currentSlide * 27.5}rem`
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
