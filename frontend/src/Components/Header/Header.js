import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { BsCheck2 } from "react-icons/bs";
const Header = ({
  heading,
  slogon,
  features,
  note,
  buttons,
  headerImage,
  backgroundImage,
  isHomeOpen,
}) => {
  const [showHeader] = useState(true);
  const [isHome] = useState(isHomeOpen);
  return (
    <div
      className={isHome ? "header" : "header header-bottom-radius"}
      style={{
        backgroundImage: `${
          isHome
            ? `linear-gradient(
          rgba(74, 17, 114, 0.7),
          rgba(74, 17, 114, 0.7)
        ),url(${backgroundImage})`
            : `linear-gradient(
          rgba(74, 17, 114, 0.3),
          rgba(74, 17, 114, 0.65)
        ),url(${backgroundImage})`
        }`,
        backgroundSize: `${isHome ? "30%" : "cover"}`,
        backgroundPosition: "100% 0",
      }}
    >
      <Navbar />
      {showHeader && (
        <div className="header-section">
          <div className="header-content">
            <div className="header-content-heading">
              <h1>{heading}</h1>
              <h4 className="slogon">{slogon}</h4>
            </div>
            <div className="header-content-features">
              {features.map((feature, index) => (
                <div className="feature" key={index}>
                  <i>
                    <BsCheck2 className="header-icons" />
                  </i>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <p className="header-note">{note} </p>

            {buttons.map((button) => {
              return <button className="btn-secondary btn-lg">{button}</button>;
            })}
          </div>
          <div className="header-image">
            {isHome ? <img src={headerImage} alt="" /> : <i>{headerImage}</i>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
