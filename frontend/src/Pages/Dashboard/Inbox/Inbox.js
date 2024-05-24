import React from "react";
import "./Inbox.css";
import { MessageNotificationSVG } from "../../../assets/RequiredData/Svgs";

const Inbox = () => {
  return (
    <div className="dashboard-inbox-container">
      <h2 className="dashboard-content-heading">Your messages</h2>
      <div className="dashboard-content-body-empty">
        <i className="icons">
          <MessageNotificationSVG />
        </i>
        <h2 className="">No messages</h2>
        <p>You don't have any messages yet.</p>
        <button className="btn-primary">Browse listings here</button>
      </div>
    </div>
  );
};

export default Inbox;
