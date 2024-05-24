import React from "react";
import "./TheBestPart.css";
import { BsCheck2 } from "react-icons/bs";

const index = () => {
  return (
    <section className="the-best-part-section">
      <div className="the-best-part-container">
        <div className="heading">
          <p>And here's the best part</p>
          <h4>You must sign a 45-day exclusivity agreement to sell with us.</h4>
        </div>
        <div className="section-data">
          <p>
            Which begs the question:
            <strong> "Why is this better for me?"</strong>
          </p>
          <p>
            They won't mention it, but other brokers lock you into 6-month
            contracts. Sell anywhere else, and you still owe them
            <strong> the full fee as a penalty!</strong>
          </p>
          <p>
            Not only are our exclusivity agreements half the length, but our
            fees are up to 3x lower.
          </p>
          <p>
            And our buyers? They’re serious, they're hungry, they've got the
            cash... And they can't buy your business anywhere else.
          </p>
          And when you close a sale with us…
          <p></p>
          <div className="points">
            <p>
              <i>
                <BsCheck2 className="icon" />
              </i>
              You keep more of the profit
            </p>
            <p>
              <i>
                <BsCheck2 className="icon" />
              </i>
              You skip exhausting tire-kickers
            </p>
            <p>
              <i>
                <BsCheck2 className="icon" />
              </i>
              You're protected legally and financially
            </p>
            <p>
              <i>
                <BsCheck2 className="icon" />
              </i>
              You save time on everything from paperwork to site transition
            </p>
          </div>
          <p>In other words...</p>
          <strong>
            Selling through anyone else is expensive, risky, and time consuming.
          </strong>
          <p>Let us save you the trouble.</p>
          <div className="buttons">
            <button className="btn-secondary btn-lg">sell my business</button>
            <button className="btn-secondary btn-lg">try valuation tool</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
