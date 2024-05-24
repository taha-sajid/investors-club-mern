import React from "react";
import { SlBell } from "react-icons/sl";
import "./Notifications.css";

const Inbox = () => {
  return (
    <div className="dashboard-content-container-white">
      <h2 className="dashboard-content-heading">Your notifications</h2>
      <div className="dashboard-content-body-empty">
        <i className="bell-icon">
          <SlBell />
        </i>
        <h2 className="">No notifications</h2>
        <p>You don't have any notifications yet.</p>
      </div>
    </div>
  );
};

export default Inbox;
