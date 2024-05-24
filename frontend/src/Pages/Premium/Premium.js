import React from "react";
import PremiumHeaderData from "../../assets/RequiredData/PremiumHeaderData";
import Header from "../../Components/Header/Header";
import FeaturedIn from "../../Components/FeaturedIn/FeaturedIn";
import OurMemberShip from "../../Components/OurMemberShip/OurMemberShip";
import RequireBusiness from "../../Components/RequireBuisness/RequireBusiness";
import PremiumTestimonials from "../../Components/PremiumTestimonials/PremiumTestimonials";
import FAQs from "../../Components/FAQs/FAQs";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
const Premium = () => {
  const { slogon, heading, buttons, isHomeOpen, features, headerImage } =
    PremiumHeaderData;
  return (
    <div>
      <ScrollToTop />
      <Header
        slogon={slogon}
        buttons={buttons}
        isHomeOpen={isHomeOpen}
        features={features}
        heading={heading}
        headerImage={headerImage}
      />

      {/* <h1 style={{ textAlign: "center",  color: '#4a1172'}} > PREMIUM </h1> */}
      <FeaturedIn />
      <RequireBusiness />
      <OurMemberShip />
      <PremiumTestimonials />
      <FAQs />
    </div>
  );
};

export default Premium;
