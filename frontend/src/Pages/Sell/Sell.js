import React from "react";
import Header from "../../Components/Header/Header";
import RecentlySoldSlider from "../../Components/RecentlySoldSlider/RecentlySoldSlider";
import SellerHeaderData from "../../assets/RequiredData/SellerHeaderData";
import SellerFeatures from "../../Components/SellerFeatures/SellerFeatures";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import CompareUs from "../../Components/CompareUs/CompareUs";
import Testimonials from "../../Components/Testimonials/Testimonials";
import IsSiteFit from "../../Components/IsSiteFit/IsSiteFit";
import SellingProcess from "../../Components/SellingProcess/SellingProcess";
import HowItFeels from "../../Components/HowItFeels/HowItFeels";
import TheBestPart from "../../Components/TheBestPart/TheBestPart";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
const Sell = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    SellerHeaderData;
  return (
    <div>
      <ScrollToTop />
      <Header
        heading={heading}
        features={features}
        slogon={slogon}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      <RecentlySoldSlider />
      <SellerFeatures />

      <HowItWorks />
      <Testimonials />
      <IsSiteFit />
      <CompareUs />
      <SellingProcess />
      <HowItFeels />
      <TheBestPart />
      {/* <h1 style={{ textAlign: "center", color: "#4a1172" }}> SELL </h1> */}
    </div>
  );
};

export default Sell;
