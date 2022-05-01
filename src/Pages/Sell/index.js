import React from "react";
import Header from "../../components/Header";
import SellerHeaderData from "../../assets/RequiredData/SellerHeaderData";
const Sell = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    SellerHeaderData;
  console.log(SellerHeaderData);
  return (
    <div>
      <Header
        heading={heading}
        features={features}
        slogon={slogon}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      Sell
    </div>
  );
};

export default Sell;
