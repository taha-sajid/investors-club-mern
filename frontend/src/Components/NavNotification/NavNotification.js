import React from "react";
import "./NavNotification.css";
import { SlBell } from "react-icons/sl";

const NavNotification = () => {
  return (
    <div className="messages-block-toggle">
      <div className="messages-block-container">
        <h3>Recent notifications</h3>
        <div className="messages-block-body">
          <i className="bell-icon">
            <SlBell />
          </i>
          <p>No notifications yet</p>
        </div>
        <div className="messages-block-footer">
          <button className="btn-ghost">Mark all as read</button>
          <button className="btn-ghost">View all</button>
        </div>
      </div>
    </div>
  );
};

export default NavNotification;
