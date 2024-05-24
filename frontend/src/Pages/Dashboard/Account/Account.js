import React from "react";
import "./Account.css";
import { SlBell } from "react-icons/sl";
import { useSelector } from "react-redux";

const Inbox = () => {
  const { isLoading, isLoggedIn, currentUser } = useSelector(
    (state) => state.auth
  );
  const { name, email, phoneNumber, role } = currentUser;
  return (
    <div className="dashboard-content-container-white">
      <div className="dashboard-content-header">
        <h2 className="dashboard-content-heading">Account Information</h2>
        <button className="btn-primary">Change information</button>
      </div>
      <div className="dashboard-content-body">
        <h4>Your personal information</h4>
        <div className="information-list">
          <h5>Name</h5>
          <p>{name}</p>
        </div>
        <div className="information-list">
          <h5>Email</h5>
          <p>{email}</p>
        </div>
        <div className="information-list">
          <h5>Phone</h5>
          <p>{phoneNumber}</p>
        </div>
        <div className="information-list">
          <h5>Preferred currency</h5>
          <p>PKR</p>
        </div>
        <div className="information-list">
          <h5>User type</h5>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
