import React from "react";
import "./SellingProcess.css";
const index = () => {
  return (
    <div className="selling-process-container">
      <div className="heading">
        <h1>
          Take risk and uncertainty out of the selling process the easy way
        </h1>
      </div>
      <div className="selling-process-container-data">
        <div className="selling-cards">
          <div className="selling-card">
            <h3>Objective valuation</h3>
            <p>
              Beginner or veteran—you deserve a fair price. We audit your site
              and give you a detailed, objective valuation.
              <span>
                We're happy to hop on a call to discuss. Ultimately, you call
                the shots.
              </span>
            </p> 
          </div>
          <div className="selling-card">
            <h3>Guidance through the process</h3>
            <p>
              Partner with a team that works to get you paid—not take you for a
              ride.
              <span>
                We do the heavy lifting, explain every step, and make sure you
                feel confident before moving ahead.
              </span>
            </p>
          </div>
          <div className="selling-card">
            <h3>Free sellers guide</h3>
            <p>
              First-time seller? Get up to speed fast!
              <span>
                Learn how to prepare, negotiate, and make profitable exit when
                the time to sell feels right.
              </span>
            </p>
          </div>
          <div className="selling-card">
            <h3>Done-for-you mediation and legal docs</h3>
            <p>
              Save time and expensive legal fees and let us draft up the
              paperwork.
              <span>
                We provide easy, fill-in-the-blank templates and custom-drafted
                docs, then help you complete them properly.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
