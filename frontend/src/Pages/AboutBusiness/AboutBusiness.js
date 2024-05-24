import React from "react";
import AboutBusinessForm from "../../Components/Forms/SellerRelatedForms/AboutBusinessForm/AboutBusinessForm";
import FormHeader from "../../Components/Forms/CommonForms/FormHeader/FormHeader";
import { aboutBusiness } from "../../assets/RequiredData/FormData";
const AboutBusiness = () => {
  return (
    <main className="form-header-container">
      <FormHeader {...aboutBusiness} />
      <AboutBusinessForm {...aboutBusiness} />
    </main>
  );
};

export default AboutBusiness;
