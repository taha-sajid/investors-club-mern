import React from "react";
import Header from "../../components/Header";
import PremiumHeaderData from "../../assets/RequiredData/PremiumHeaderData";
const Premium = () => {
  const { slogon, heading, buttons, isHomeOpen, features, headerImage } =
    PremiumHeaderData;
  console.log(headerImage);
  return (
    <div>
      <Header
        slogon={slogon}
        buttons={buttons}
        isHomeOpen={isHomeOpen}
        features={features}
        heading={heading}
        headerImage={headerImage}
      />
        <h1 style={{ textAlign: "center",  color: '#4a1172'}} > PREMIUM </h1>

    </div>
  );
};

export default Premium;
