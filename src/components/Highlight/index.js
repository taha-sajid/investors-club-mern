import React from "react";
import "./Highlight.css";
import CurrentPosition from "../../components/CurrentPosition";
const index = () => {
  return (
    <>
      <div className="highlight-section">
        <div className="highlight-container">
          <CurrentPosition />
        </div>
      </div>
    </>
  );
};

export default index;
