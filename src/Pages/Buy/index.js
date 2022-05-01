import React from "react";
import Header from "../../components/Header";
import BuyerHeaderData from "../../assets/RequiredData/BuyerHeaderData";

const Buy = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    BuyerHeaderData;
  console.log(isHomeOpen);
  return (
    <div style={{ backgroundColor: "cadetblue" }}>
      <>
        <Header
          heading={heading}
          features={features}
          slogon={slogon}
          buttons={buttons}
          backgroundImage={backgroundImage}
          isHomeOpen={isHomeOpen}
        />
        <h1 style={{ color: "white" }}> buy </h1>
      </>
    </div>
  );
};

export default Buy;
