import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import Navbar from "../../../Navbar/Navbar";
import { useFormik } from "formik";
import { loginSchema } from "../../../../Schema/LoginSchema";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../../../../Pages/Dashboard/Dashboard";
import {
  login,
  logout,
} from "../../../../ReduxToolkit/Features/Auth/authSlice";
import { Route, Navigate, Link } from "react-router-dom";

  const Index = () => {
  const dispatch = useDispatch();
  const [notice, setNotice] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { isLoading, isLoggedIn, currentUser } = useSelector(
    (state) => state.auth
  );

  console.log(process.env.BASE_URL, "My base url");

  const initialValues = {
    email: "",
    password: "",
  };
  const postData = async () => {
    const { email, password } = values;

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data.user, "this is data", email, password);
    if (data.status === "success") {
      setNotice("You are successfully logged in.");
      dispatch(login(data.user));
      setShowAlert(true);
      console.log(currentUser, "current user");
    } else {
      dispatch(logout());
      setShowAlert(true);
      setNotice(data.message);
    }
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: false,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log(values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });
  return (
    <>
      <Navbar />
      <div className="login-form-container">
        <form className="login-form">
          <h2>Login</h2>
          <div className="input-field">
            <label htmlFor="email">E-mail</label>

            <input
              type="text"
              placeholder="Enter your e-mail address"
              className="input-fl"
              autoComplete="on"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              className="input-fl"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <div className="checkbox-wrapper">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          {showAlert &&
            (isLoggedIn ? (
              <Navigate to="/account/information" />
            ) : (
              <div
                className={`notice ${
                  isLoggedIn ? "notice--success" : "notice--warning"
                }`}
              >
                <p>{notice}</p>
              </div>
            ))}
          <div className="login-form-buttons">
            <button className="btn-primary" type="button" onClick={postData}>
              Login
            </button>
            <button className="" type="button">
              Forgot password
            </button>
          </div>
          <div className="login-form-footer">
            Don't have an account yet?
            <span>
              <Link to={"/register"}> Click here </Link>
            </span>
            to create one.
          </div>
        </form>
      </div>
      {isLoggedIn && <Dashboard />}
    </>
  );
};

export default Index;
