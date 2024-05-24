import React from "react";
import { useState } from "react";
import { Arrow } from "../../assets/RequiredData/Svgs";
import "./FAQs.css";
import FAQsData from "../../assets/RequiredData/FAQsData";
const Index = () => {
  return (
    <div className="FAQs-container">
      <h1>Frequently asked questions</h1>
      <div className="questions-container">
        {FAQsData.map((data) => {
          const { question, answer, id } = data;
          return <Question question={question} answer={answer} key={id} />;
        })}
      </div>
    </div> 
  );
};

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div
        className="question"
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
      >
        <i className={showAnswer ? "rotate" : ""}>
          <Arrow />
        </i>

        <h4>{question}</h4>
        <p onClick={() => {}}>{showAnswer && answer}</p>
      </div>
    </>
  );
};

export default Index;
