import "./App.css";
// import TopNav from "./Components/TopNav"
import React from "react";

// import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Buy from "./Pages/Buy/Buy";
import Sell from "./Pages/Sell/Sell";
import Listings from "./Pages/Listings/Listings";
import Premium from "./Pages/Premium/Premium";
import Login from "./Components/Forms/CommonForms/LoginForm/LoginForm";
import Registeration from "./Pages/Register/Register";
import AdditionalInfoForm from "./Pages/AdditionalInfo/AdditionalInfo";
import FinancialInfoForm from "./Pages/FinancialInfo/FinancialInfo";
import ApplicationCompleted from "./Pages/ApplicationCompleted/ApplicationCompleted";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import SellYourWebsite from "./Pages/SellYourWebsite/SellYourWebsite";
import SingleProductPage from "./Components/SingleProductPage/SingleProductPage";
import MonitizationInfo from "./Pages/MonitizationInfo/MonitizationInfo";
import AboutBusiness from "./Pages/AboutBusiness/AboutBusiness";
import FinancialAnalytics from "./Pages/FinancialAnalytics/FinancialAnalytics";
import SellYourService from "./Pages/SellYourService/SellYourService";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  // Navigate,
  // useLocation,
} from "react-router-dom";

function App() {
  console.log("It's working fine");
  const routes = [
    "/account/offers",
    "/account/inbox",
    "/account/notifications",
    "/account/information",
    "/account/receipts",
    "/account/subscriptions",
  ];
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/buy" element={<Navigate replace to="/buy" />} /> */}
          <Route path="/buy-online-business" element={<Buy />} />
          <Route path="/sell-your-website" element={<Sell />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/productpage" element={<SingleProductPage />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/login" element={<Login />} />
          {routes.map((route) => {
            return <Route path={route} element={<Dashboard />} />;
          })}
          <Route path="/additional-info" element={<AdditionalInfoForm />} />
          <Route path="/financial-info" element={<FinancialInfoForm />} />
          <Route
            path="/application-completed"
            element={<ApplicationCompleted />}
          />
          <Route
            path="/sell-your-website/intro"
            element={<SellYourWebsite />}
          />
          <Route
            path="/sell-your-website/content/step-1"
            element={<MonitizationInfo />}
          />
          <Route
            path="/sell-your-website/content/step-2"
            element={<AboutBusiness />}
          />
          <Route
            path="/sell-your-website/content/step-3"
            element={<FinancialAnalytics />}
          />
          <Route
            path="/sell-your-service/step-1"
            element={<SellYourService />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
