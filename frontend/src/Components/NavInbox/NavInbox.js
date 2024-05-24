import React, { useState } from "react";
import "./NavInbox.css";
import { MessageNotificationSVG } from "../../assets/RequiredData/Svgs";
const NavInbox = () => {
  const [isMessage, setIsMessage] = useState(true);
  return (
    <div className="messages-block-toggle">
      <div className="messages-block-container">
        <h3>Recent messages</h3>
        {!isMessage && (
          <div className="messages-block-body">
            <i>
              <MessageNotificationSVG />
            </i>
            <p>No messages yet</p>
          </div>
        )}
        {isMessage && (
          <div className="messages-list-container">
            <div className="messages-list">
              <div className="message-list-body">
                <p>This is such a nice person</p>
              </div>
              <div className="message-list-footer">
                <p className="messenger-name">taha sajid</p>.
                <p>about 3 hours ago</p>
              </div>
            </div>
            <div className="messages-list">
              <div className="message-list-body">
                <p>This is such a nice person</p>
              </div>
              <div className="message-list-footer">
                <p className="messenger-name">taha sajid</p>.
                <p>about 3 hours ago</p>
              </div>
            </div>
            <div className="messages-list">
              <div className="message-list-body">
                <p>This is such a nice person</p>
              </div>
              <div className="message-list-footer">
                <p className="messenger-name">taha sajid</p>.
                <p>about 3 hours ago</p>
              </div>
            </div>
            <div className="messages-list">
              <div className="message-list-body">
                <p>This is such a nice person</p>
              </div>
              <div className="message-list-footer">
                <p className="messenger-name">taha sajid</p>.
                <p>about 3 hours ago</p>
              </div>
            </div>
          </div>
        )}
        <div className="messages-block-footer">
          <button className="btn-ghost">Mark all as read</button>
          <button className="btn-ghost">View all</button>
        </div>
      </div>
    </div>
  );
};

export default NavInbox;
