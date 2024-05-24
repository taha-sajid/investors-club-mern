import React from "react";
import "./FormHeader.css";
import Navbar from "../../../Navbar/Navbar";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";

function Index({
  heading,
  headerButton,
  stepDescription,
  stepName,
  stepsIndicator,
  criteria,
}) {
  return (
    <>
      <ScrollToTop />
      <main className="form-header-container">
        <div className="registeration-header-container">
          <Navbar />
          <section className="form-information">
            <h1 className="form-title">{heading}</h1>
            <div className="steps-container">
              {stepsIndicator &&
                stepsIndicator.map((val) => {
                  return (
                    <div className="step active">
                      <p>{val}</p>
                    </div>
                  );
                })}
            </div>
            {stepName && <h4 className="step-title">{stepName}</h4>}
            {criteria && (
              <div className="criteria">
                {criteria.map((el) => {
                  const { icon, description } = el;
                  console.log(icon);
                  return (
                    <>
                      <div>
                        <p>{icon}</p> <p>{description}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
            {stepDescription && (
              <p className="step-description">{stepDescription}</p>
            )}
            {headerButton && (
              <div className="header-buttons-container">
                {headerButton.map((val, index) => {
                  return (
                    <button
                      className={`btn-secondary btn-lg ${
                        index === 0 ? "btn-ghost" : ""
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            )}
            {headerButton && (
              <p className="contact-email">
                Having issues? Please contact
                <span> support@investors.club </span>
              </p>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default Index;
