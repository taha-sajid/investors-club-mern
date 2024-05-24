import React, { useEffect } from "react";
import "./FinancialInfoForm.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { FinancialInfoSchema } from "../../../../Schema/FinancialInfoSchema";
const Index = ({ button }) => {
  const initialValues = {
    file: null,
  };
  const { values, errors, touched, setFieldValue, isSubmitting } = useFormik({
    initialValues,
    validationSchema: FinancialInfoSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    //// By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: (values, action) => {
      // console.log(values);
      //// to get rid of all the values after submitting the form
      action.resetForm();
    },
  });
  useEffect(() => {
    console.log(values.file);
  }, [values.file]);
  return (
    <div className="financial-info-form-container  form-container">
      <div className="form-section">
        <div className="field">
          <div className="form-lbl">
            <p className="form-title">Proof of Funds</p>
            <p className="sublbl">
              Please provide screenshots of bank or PayPal balances totaling at
              least $10,000. (See example) Only your name and the balance must
              be visible. Do not disclose any sensitive information.
            </p>
          </div>
          <div className="input-file">
            <input
              type="file"
              name="file"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
            <p>Drag and drop up to five files confirming your funds.</p>
          </div>
          {touched.file && errors.file && <div>{errors.file}</div>}
          <div className="submitted-files">
            <h3>Submitted files:</h3>
            <p>No files uploaded yet.</p>
          </div>
          <div className="uploaded-files">
            <div className="file-name">
              <p>Syed Muhammad Taha MERN Stack.docx</p>
              <p>94.873KB</p>
            </div>
            <div className="delete-button">
              <button>
                <p> x</p>
              </button>
            </div>
          </div>
          <div className="uploaded-files">
            <div className="file-name">
              <p>Syed Muhammad Taha MERN Stack.docx</p>
              <p>94.873KB</p>
            </div>
            <div className="delete-button">
              <button>
                <p> x</p>
              </button>
            </div>
          </div>
          <div className="uploaded-files">
            <div className="file-name">
              <p>Syed Muhammad Taha MERN Stack.docx</p>
              <p>94.873KB</p>
            </div>
            <div className="delete-button">
              <button>
                <p> x</p>
              </button>
            </div>
          </div>
          <div className="uploaded-files">
            <div className="file-name">
              <p>Syed Muhammad Taha MERN Stack.docx</p>
              <p>94.873KB</p>
            </div>
            <div className="delete-button">
              <button>
                <p>x</p>
              </button>
            </div>
          </div>
          <p className="notice notice--note">
            Your information will never be shared.
          </p>
        </div>
        <div className="buttons-container">
          <Link to={"/application-completed"}>
            <button className="btn-ghost btn-lg">Skip this step</button>
          </Link>
          <Link to={"/application-completed"}>
            <button
              className="btn-primary btn-lg"
              type="submit"
              disabled={!values.file || isSubmitting}
            >
              Save and finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
