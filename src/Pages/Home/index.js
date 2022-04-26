import React from "react";
import RecentlySoldSlider from "../../components/RecentlySoldSlider";
import Buyers from "../../components/Buyers";
import Seller from "../../components/Seller";
import LatestEdition from "../../components/LatestEdition";
import JoinThePremium from "../../components/JoinThePremium";
import Testimonials from "../../components/Testimonials";
import FreeResources from "../../components/FreeResources";
const Home = () => {
  return (
    <>
      <RecentlySoldSlider />
      <Buyers />
      <Seller />
      <LatestEdition />
      <JoinThePremium />
      <Testimonials />
      <FreeResources />
    </>
  );
};

export default Home;
