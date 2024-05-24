import React from "react";
// import { additionalInfo } from "../../assets/RequiredData/FormData";
import { CheckButtonSVG } from "../../assets/RequiredData/Svgs";
import { useState } from "react";

const Index = ({ id, name, onClick }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <button
        className={`btn-lg ${
          clicked ? "btn-secondary" : "btn-neutral--outline"
        } `}
        id={id}
        type="button"
        name={name}
        onClick={() => {
          onClick(name);
          setClicked(!clicked);
        }}
      >
        <span className="icon">
          <CheckButtonSVG
            onClick={() => {
              onClick(name);
              setClicked(!clicked);
            }}
          />
        </span>
        {name}
      </button>
    </>
  );
};

export default Index;
