import React from "react";
import "./AdditionalInfoForm.css";
import ButtonWithIcon from "../../../ButtonWitIcon/ButtonWithIcon";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { AdditionalInfoSchema } from "../../../../Schema/AdditionalInfoSchema";
const Index = ({
  ques1,
  ques1Options,
  ques2,
  ques2Options,
  registerReferal,
  sublbl,
  button,
}) => {
  const initialValues = {
    referalData: "",
    email: "",
    password: "",
    confirm_password: "",
    phoneNumber: "",
  };
  const {
    // values,
    // handleBlur,
    // handleChange,
    // handleSubmit,
    // errors,
    // touched,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema: AdditionalInfoSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    //// By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: (values, action) => {
      console.log(values);
      //// to get rid of all the values after submitting the form
      action.resetForm();
    },
  });
  console.log(isValid);

  return (
    <>
      <form
        action="#"
        className="additional-info-form-container form-container"
      >
        <div className="form-section">
          <div className="question-container">
            <p className="form-ques">{ques1}</p>
            <p></p>
          </div>
          <div className="form-options-container">
            {ques1Options.map((val, index) => {
              return <ButtonWithIcon key={index} id={index} name={val} />;
            })}
          </div>
          <div className="question-container">
            <p className="form-ques">{ques2}</p>
            <p>Select multiple options</p>
          </div>
          <div className="form-options-container">
            {ques2Options.map((val, index) => {
              return <ButtonWithIcon key={index} id={index} name={val} />;
            })}
          </div>
        </div>
        <div className="form-section">
          <div className="question-container text-area">
            <p> {registerReferal}</p>
            <span className="sublbl">{sublbl}</span>
          </div>
          <textarea
            type="text"
            name=""
            id=""
            placeholder="Search, social, referal... (please be specific)"
          />
          <div className="buttons-container">
            {button.map((val, index) => {
              return (
                <Link to={"/financial-info"}>
                  <button
                    className="btn-lg btn-primary btn-next"
                    type="submit"
                    key={index}
                  >
                    {val}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
};

export default Index;
