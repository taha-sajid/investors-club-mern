import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import Offers from "./Offers/Offers";
import Inbox from "./Inbox/Inbox";
import Notifications from "./Notifications/Notifications";
import Account from "./Account/Account";
import Navbar from "../../Components/Navbar/Navbar";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../ReduxToolkit/Features/Auth/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();
  const pathName = location.pathname.split("/");
  let currentPage = pathName[2];

  const options = [
    { id: 1, name: "Offers" },
    { id: 2, name: "Inbox" },
    { id: 3, name: "Notifications" },
    { id: 4, name: "Account" },
    { id: 5, name: "Receipts" },  
    { id: 6, name: "Subscriptions" },
  ];

  if (currentPage === "information") {
    currentPage = "account";
  }
  const [activeOption, setActiveOption] = useState(currentPage);
  useEffect(() => {
    setActiveOption(currentPage);
  }, [location]);
  function handleLogout() {
    dispatch(logout());
  }
  return (
    <>
      <Navbar />
      <main className="dashboard-container">
        <header className="dashboard-header">
          <div className="account-heading">
            <h1> My account</h1>
          </div>
          <div className="account-type">
            <p>
              I'm a <span> buyer</span>
            </p>
            <FormGroup>
              <FormControlLabel control={<Switch />} />
            </FormGroup>
          </div>
        </header>
        <section className="dashboard-body">
          <div className="dashboard-sidebar">
            <div className="dashboard-sidebar-list">
              <ul className="">
                {options.map((option) => {
                  return (
                    <li className="dashboard-sidebar-list" key={option.id}>
                      <Link
                        to={`/account/${
                          option.name === "Account"
                            ? "information"
                            : `${option.name.toLowerCase()}`
                        }   `}
                        className={
                          activeOption === option.name.toLowerCase()
                            ? `active`
                            : ""
                        }
                      >
                        {option.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="sidebar-footer">
              <button className="btn-ghost" onClick={handleLogout}>
                logout
              </button>
            </div>
          </div>
          <div className="dashboard-content">
            {location.pathname === "/account/offers" && <Offers />}
            {location.pathname === "/account/inbox" && <Inbox />}
            {location.pathname === "/account/notifications" && (
              <Notifications />
            )}
            {location.pathname === "/account/information" && <Account />}
          </div>
        </section>
      </main>

      {!isLoggedIn && <Navigate to={"/"} />}
    </>
  );
};

export default Dashboard;
