import React from "react";
import { businessInfo } from "../../assets/RequiredData/FormData";
import FormHeader from "../../Components/Forms/CommonForms/FormHeader/FormHeader";
import Intro from "../../Components/Forms/SellerRelatedForms/Intro/Intro";
import "./SellYourWebsite.css"

const SellYourWebsite = () => {
  return (
    <>
      <FormHeader {...businessInfo} />
      <Intro />
    </>
  );
};

export default SellYourWebsite;
