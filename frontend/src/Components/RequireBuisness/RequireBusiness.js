import React from "react";
import "./RequireBusiness.css";
import {
  BeautifullLineSVG,
  CheckSVG,
  EyeSVG3,
  MessageSVG,
} from "../../assets/RequiredData/Svgs";
const index = () => {
  return (
    <section className="require-business-section">
      <div className="require-business-container">
        <div className="heading">
          <h1> Everything you need to acquire a business with confidence</h1>
        </div>

        <div className="cards">
          <i className="line">
            <BeautifullLineSVG />
          </i>
          <div className="card">
            <i>
              <CheckSVG className="icon" />
            </i>
            <h3>Private Deal Flow</h3>
            <p>
              <strong>
                Get access to exclusive and private listings you won't find
                anywhere else.
              </strong>
              Forget about competing with thousands of public buyers.
            </p>
          </div>
          <div className="card">
            <i>
              <EyeSVG3 className="icon" />
            </i>
            <h3>Better Due Diligence</h3>
            <p>
              <strong>
                Utilize the power of the most thorough due diligence reports in
                the industry.
              </strong>
              Saving your valuable time and taking the guesswork out of your
              investments.
            </p>
          </div>
          <div className="card">
            <i>
              <MessageSVG className="icon" />
            </i>
            <h3>Direct Communication</h3>
            <p>
              <strong>
                Connect with sellers through our internal messaging system and
                get instant answers to all your burning questions.
              </strong>
            </p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn-secondary btn-lg">
            Become a Premium Seller
          </button>
        </div>
      </div>
    </section>
  );
};

export default index;
