import React from "react";
import "./PremiumTestimonials.css";
import { LeftArrowSVG, RightArrowSVG } from "../../assets/RequiredData/Svgs";
const index = () => {
  return (
    <section className="premium-testimonials-section">
      <div className="premium-testimonials-container">
        <div className="testimonials">
          <div className="heading">
            <h1>Testimonials from our Premium members</h1>
          </div>
          <div className="testimonial-card">
            <i className="icon-left">
              <LeftArrowSVG />
            </i>
            <i className="icon-right">
              <RightArrowSVG />
            </i>
            <div className="person">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h3>Tom cruise</h3>
            </div>
            <div className="comments">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis amet minus earum nam expedita eveniet incidunt
              quibusdam sit! Officiis qui incidunt atque, libero veritatis
              perspiciatis delectus sint nisi numquam error.lorem Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="slide-indicator">
            <div className="indicator active"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>

        {/* REAL STATE INVESTORS */}
        <div className="real-state-investors">
          <h1>
            Nathan, from real estate investor to being a passive website
            investor
          </h1>
        </div>
      </div>

      {/* READY TO JOIN THE CLUB */}
      <div className="join-the-club">
        <h1>Ready to join the club?</h1>
        <p>
          Thousands of hours of due diligence research are just a click away, so
          if you’re ready to take website investing to the next level, join
          today.
        </p>
        <button className="btn-lg btn-secondary">I want in</button>
      </div>
    </section>
  );
};

export default index;
