import React from "react";
import { monitizationInfo } from "../../assets/RequiredData/FormData";
import FormHeader from "../../Components/Forms/CommonForms/FormHeader/FormHeader";
import MonitizationInfoForm from "../../Components/Forms/SellerRelatedForms/MonitizationInfoForm/MonitizationInfoForm";

const MonitizationInfo = () => {
  return (
    <main className="form-header-container">
      <FormHeader {...monitizationInfo} />
      <MonitizationInfoForm {...monitizationInfo} />
    </main>
  );
};

export default MonitizationInfo;
