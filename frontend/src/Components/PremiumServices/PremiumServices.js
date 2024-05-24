import React from "react";
import "./PremiumServices.css";

const PremiumServices = () => {
  return (
    <section className="premium-services-section">
      <div className="premium-services-container">
        <div className="premium-services-heading">
          <h1>
            <strong>
              Want investing to be totally hands-free? <br />
              Premium services: For those who <em>just</em> want to count their
              cash.
            </strong>
          </h1>
          <p className="note">
            *Premium services are optional and paid. Find more info through the
            links below.
          </p>
        </div>
        <div className="premium-services-card-container">
          <div className="premium-services-card">
            <img
              src="https://investors.club/static/media/deco-deals-concierge.cdfe36b1.svg"
              alt=""
            />
            <h1 className="card-heading">Deals Concierge</h1>
            <div className="card-note">
              For first-class investors wanting a more exclusive deal
            </div>
            <div className="card-note-strong">
              <strong>
                We’ll privately source opportunities for your eyes only and act
                as your buying manager
              </strong>
            </div>

            <div className="card-highlights">
              <ul>
                <li className="icon">
                  Done-for-you drafting and management of contracts
                </li>
                <li className="icon">
                  Done-for-you escrow: no transaction fees, fast turnaround, and
                  no strict requirements
                </li>
                <li className="icon">
                  Inspection period of 7-14 days post-purchase handled by
                  Investors Club
                </li>
              </ul>
            </div>
            <div className="card-button">
              <button className="btn-secondary btn-lg">Find out more</button>
            </div>
          </div>
          <div className="premium-services-card">
            <img
              src="https://investors.club/static/media/deco-ongoing-growth.58e61986.svg"
              alt=""
            />
            <h1 className="card-heading">Ongoing growth</h1>
            <div className="card-note">
              For hands-free growth of your investment
            </div>
            <div className="card-note-strong">
              <strong>
                We’ll run, optimize, and grow the business for you, positioning
                you for a profitable exit
              </strong>
            </div>

            <div className="card-highlights">
              <ul>
                <li className="icon">
                  Day-to-day and done-for-you: SEO, integrations, technical
                  development, content, and more
                </li>
                <li className="icon">
                  Comprehensive: no need to source vendors, manage campaigns, or
                  get in the weeds
                </li>
                <li className="icon">
                  Transparent reporting and clear communication at all times
                </li>
              </ul>
            </div>
            <div className="card-button">
              <button className="btn-secondary btn-lg">Find out more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
