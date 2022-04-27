import React from "react";
import "./Testimonials.css";
import image from "../../assets/images/testimonial1.jpg";
const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h3>Here's what others have to say about the Investors Club team</h3>
      <div className="testiomonias-sliders">
        <div className="testimonials-slide">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="testimonials-slide-data">
            <div className="description">
              I just sold my business with Andrej through Investors Club and had
              an amazing experience. The Investors Club team was very thorough,
              responsive and organized when asking for information to evaluate
              my business. I received a very fair valuation, but best of all, my
              business sold after only 1 month of being listed. Andrej’s buyers
              are very serious and are looking for excellent businesses to
              purchase. The process went smoothly and quickly.
            </div>
            <div className="name-and-category">
              <h4>Shanice miller</h4>
              <h5>Entrepreneur</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
