import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./ReduxToolkit/store";
import { Provider } from "react-redux";
import "./index.css";
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measu ring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
