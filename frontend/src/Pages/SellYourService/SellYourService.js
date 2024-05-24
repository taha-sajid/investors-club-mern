import React from "react";
import SellYourSericeForm from "../../Components/Forms/SellerRelatedForms/SellYourServiceForm/SellYourSericeForm";
import FormHeader from "../../Components/Forms/CommonForms/FormHeader/FormHeader";
import { aboutService } from "../../assets/RequiredData/FormData";
const SellYourService = () => {
  return (
    <div>
      <FormHeader {...aboutService} />
      <SellYourSericeForm {...aboutService} />
    </div>
  );
};

export default SellYourService;
