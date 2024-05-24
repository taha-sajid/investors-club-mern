import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FinancialAnalytics.css";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../ReduxToolkit/Features/Auth/listingSlice";

const FinancialAnalyticsForm = () => {
  const { data } = useSelector((state) => state.listing);
  const [listingData, setListingData] = useState(data);
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();
  const initialValues = {};
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });

  const postData = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    Object.entries(data).forEach(([key, value]) => {
      // Skip undefined values
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    const res = await fetch("http://localhost:5000/createlisting", {
      method: "POST",
      body: formData,
    });

    const respData = await res.json();

    if (respData.status === "success") {
      //   setNotice("Your listing has been successfully published.");
      //   setShowAlert(true);
      console.log("Your listing has been successfully published.");
    } else {
      //   setShowAlert(true);
      //   setNotice(data.message);
      console.log(respData.message, respData);
    }
  };
  useEffect(() => {
    dispatch(updateFormData(values));
  }, [values]);

  const handlePublish = () => {
    dispatch(updateFormData(values));
    postData();
    console.log(data, "Final value");
  };

  return (
    <>
      <form className="financial-analytics-form-container form-container ">
        <div className="form-section">
          <p className="site-URL">What is the domain registration year?</p>
          <input
            type="text"
            placeholder="MM/YYYY"
            name="domainRegistrationYear"
            id="domainRegistrationYear"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <p className="site-URL">
            When did the site start generating revenue?
          </p>
          <input
            type="text"
            placeholder="MM/YYYY"
            name="revenueStart"
            id="revenueStart"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="site-URL">What is your Asking Price?</p>
          <input
            type="text"
            placeholder=""
            name="askingPrice"
            id="askingPrice"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="site-URL">What is your Business type?</p>
          <input
            type="text"
            placeholder=""
            name="businessType"
            id="businessType"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="site-URL">
            Average monthly net revenue (USD) for the last 3 months
          </p>
          <input
            type="text"
            placeholder=""
            name="revenue1"
            id="revenue1"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="site-URL">
            Average monthly net revenue (USD) for the last 6 months
          </p>
          <input
            type="text"
            placeholder=""
            name="revenue2"
            id="revenue2"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="site-URL">
            Average monthly net revenue (USD) for the last 12 months
          </p>
          <input
            type="text"
            placeholder=""
            name="revenue3"
            id="revenue3"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="upload-image">
            <label className="btn-primary" htmlFor="image">
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              onChange={(event) => {
                setSelectedFile(event.currentTarget.files[0]);
              }}
            />
          </div>
        </div>
        <div className="buttons">
          <Link to={"/sell-your-website/content/step-2"}>
            <button className="btn-lg btn-secondary" type="button">
              Previous step
            </button>
          </Link>
          <button
            className="btn-lg btn-primary"
            type="button"
            onClick={handlePublish}
          >
            Publish Listing
          </button>
        </div>
      </form>
    </>
  );
};

export default FinancialAnalyticsForm;
