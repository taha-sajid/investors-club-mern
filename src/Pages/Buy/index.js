import React from "react";
import Header from "../../components/Header";
import BuyerHeaderData from "../../assets/RequiredData/BuyerHeaderData";

const Buy = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    BuyerHeaderData;
  console.log(isHomeOpen);
  return (
    <div>
      <>
        <Header
          heading={heading}
          features={features}
          slogon={slogon}
          buttons={buttons}
          backgroundImage={backgroundImage}
          isHomeOpen={isHomeOpen}
        />
        <h1 style={{ textAlign: "center",  color: '#4a1172'}} > BUY </h1>
      </>
    </div>
  );
};

export default Buy;
