import React from "react";
import Header from "../../Components/Header/Header";
import BuyerHeaderData from "../../assets/RequiredData/BuyerHeaderData";
import Cards from "../../Components/Cards/Cards";
import BuyerFeatures from "../../Components/BuyerFeatures/BuyerFeatures";
import LatestEdition from "../../Components/LatestEdition/LatestEdition";
import Highlight from "../../Components/Highlight/Highlight";
import ShowKindness from "../../Components/ShowKindness/ShowKindness";
import cardData from "../../assets/RequiredData/LatestEditionCardData";
import Analyze from "../../Components/Analyze/Analyze";
import JoinUsToday from "../../Components/JoinUsToday/JoinUsToday";
import CompareUs from "../../Components/CompareUs/CompareUs";
import PremiumServices from "../../Components/PremiumServices/PremiumServices";
import Testimonials from "../../Components/Testimonials/Testimonials";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
const Buy = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    BuyerHeaderData;
  return (
    <>
      <ScrollToTop />
      <Header
        heading={heading}
        features={features}
        slogon={slogon}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      <Cards />
      <BuyerFeatures />
      <div style={{ backgroundColor: "#f4f7ff" }}>
        {/* <LatestEdition cardData={cardData} /> */}

        <Highlight />
        <ShowKindness />
        <Analyze />
      </div>
      <JoinUsToday />
      <CompareUs />
      <Testimonials />
      <PremiumServices />
      <JoinUsToday />
    </>
  );
};

export default Buy;
