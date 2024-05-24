import React, { useEffect } from "react";
import ButtonWithIcon from "../../../ButtonWitIcon/ButtonWithIcon";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../ReduxToolkit/Features/Auth/listingSlice";

import "./MonitizationInfo.css";

const MonitizationInfoForm = ({ button }) => {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.listing);

  const monetizationMethods = { monetizationMethods: selectedButtons };

  const handleButtonClick = (name) => {
    if (selectedButtons.includes(name)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== name));
      dispatch(updateFormData(monetizationMethods));
    } else {
      setSelectedButtons([...selectedButtons, name]);
      dispatch(updateFormData(monetizationMethods));
    }
    // console.log(data, monitizationMethod, "This is listingSlice data");
  };
  const handleNextButton = () => {
    dispatch(updateFormData(monetizationMethods));
    // console.log(data, "This is listingSlice data");
  };

  return (
    <form className="monitization-info-form-container form-container">
      <div className="form-section">
        <div className="form-heading">
          <h5> Select monetization methods </h5>
          <div className="form-options-container">
            {button.map((val, index) => {
              return (
                <ButtonWithIcon
                  key={index}
                  id={index}
                  name={val}
                  onClick={handleButtonClick}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Link to={"/sell-your-website/content/step-2"}>
        <div className="buttons-container">
          <button
            className="btn-lg btn-primary"
            type="submit"
            onClick={handleNextButton}
          >
            Next Step
          </button>
        </div>
      </Link>
    </form>
  );
};

export default MonitizationInfoForm;
