import React from "react";
import "./HowItWorks.css";
const index = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <h2>How does it Work?</h2>
        <p className="slogon">
          Selling your business with Investors Club is simple, fast, and fair.
        </p>
        <div className="working-steps-container">
          <div className="step-numb step-1">
            <div className="heading">
              <span>
                <p> 1 </p>
              </span>
              <h3>Submit site for sale</h3>
            </div>
            <p className="description">
              Complete a short questionnaire on your business, including URL,
              average revenue, and contact details.
            </p>
          </div>
          <div className="step-numb step-2">
            <div className="heading">
              <span>
                <p> 2 </p>
              </span>
              <h3>Evaluation and review</h3>
            </div>
            <p className="description">
              We'll review your site to determine if it's a good fit. You'll
              hear from us within 24 hours.
            </p>
          </div>
          <div className="step-numb step-3">
            <div className="heading">
              <span>
                <p> 3 </p>
              </span>
              <h3>Details about the business</h3>
            </div>
            <p className="description">
              If it's a good fit, we'll send you a link to the detailed form
              where you'll describe different aspects of your business (traffic,
              financials, work involved, etc.).
            </p>
          </div>
          <div className="step-numb step-4">
            <div className="heading">
              <span>
                <p> 4 </p>
              </span>
              <h3>Verification</h3>
            </div>
            <p className="description">
              You’ll send us a set of documents & Google Analytics access for
              verification.
            </p>
          </div>
          <div className="step-numb step-5">
            <div className="heading">
              <span>
                <p> 5 </p>
              </span>
              <h3>Valuation</h3>
            </div>
            <p className="description">
              We’ll form the valuation and send it to you for approval.
            </p>
          </div>
          <div className="step-numb step-6">
            <div className="heading">
              <span>
                <p> 6 </p>
              </span>
              <h3>Signing EA</h3>
            </div>
            <p className="description">
              If you agree with our valuation, you will be asked to sign the
              Exclusivity Agreement.
            </p>
          </div>
          <div className="step-numb step-7">
            <div className="heading">
              <span>
                <p> 7 </p>
              </span>
              <h3>Your listing is live!</h3>
            </div>
            <p className="description">
              It usually takes less than a week to go from step 1 to step 7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
