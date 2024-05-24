import React from "react";
import FormHeader from "../../Components/Forms/CommonForms/FormHeader/FormHeader";
import AdditionalInfoForm from "../../Components/Forms/BuyerRelatedForms/AdditionalInfoForm/AdditionalInfoForm";
import "../../Components/Forms/BuyerRelatedForms/AdditionalInfoForm/AdditionalInfoForm.css";
import { additionalInfo } from "../../assets/RequiredData/FormData";

const index = () => {
  return (
    <>
      <main className="form-header-container form-background">
        <FormHeader {...additionalInfo} />
        <form>
          <AdditionalInfoForm {...additionalInfo} />
        </form>
      </main>
    </>
  );
};

export default index;
