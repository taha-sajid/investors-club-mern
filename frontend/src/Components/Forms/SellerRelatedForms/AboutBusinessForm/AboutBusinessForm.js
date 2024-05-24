import React, { useEffect, useState } from "react";
import "./AboutBusinessForm.css";
import { Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../ReduxToolkit/Features/Auth/listingSlice";
import { Link } from "react-router-dom";

const AboutBusinessForm = ({ button }) => {
  const { data } = useSelector((state) => state.listing);
  const dispatch = useDispatch();
  const initialValues = {};

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    errors,
    touched,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit: (values, action) => {
      // action.resetForm();
    },
  });

  const handleButtonClick = () => {
    dispatch(updateFormData(values));
    // console.log(data, "This is listingSlice data");
    resetForm();
  };
  useEffect(() => {
    dispatch(updateFormData(values));
  }, [values]);
  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className="about-business-form-container form-container additional-info-form-container"
    >
      <div className="form-section">
        <p className="site-URL">Site URL</p>
        <input
          type="text"
          placeholder="e.g. https://myawesomewebsite.com"
          name="url"
          id="url"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="form-section ">
        <p className="site-URL">What's the owner's full name?</p>
        <input
          type="text"
          placeholder="e.g Syed Muhammad Taha"
          name="ownerName"
          id="ownerName"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className="site-URL">What's your Business name?</p>
        <input
          type="text"
          placeholder="e.g Syed Muhammad Taha"
          name="businessName"
          id="businessName"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className="site-URL">When did you start it ?</p>
        <input
          type="data"
          placeholder="MM/YYYY"
          name="launchDate"
          id="launchDate"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className="site-URL">
          Please explain how your site works and how it makes money
        </p>
        <textarea
          type="textarea"
          placeholder="Listings with detailed and 'creative' descriptions are more likely to draw investors' attention. It's the best possible way to get people interested in your business (min. 150 chars)."
          name="siteWorking"
          id="siteWorking"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="buttons">
        <Link to={"/sell-your-website/content/step-1"}>
          <button className="btn-lg btn-secondary" type="button">
            Previous step
          </button>
        </Link>
        <Link to={"/sell-your-website/content/step-3"}>
          <button
            className="btn-lg btn-primary"
            type="button"
            onClick={handleButtonClick}
          >
            Next step
          </button>
        </Link>
      </div>
    </form>
  );
};

export default AboutBusinessForm;
