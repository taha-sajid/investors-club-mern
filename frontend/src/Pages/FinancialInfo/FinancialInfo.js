import React from "react";
import { financialInfo } from "../../assets/RequiredData/FormData";
import FormHeader from "../../Components/Forms/CommonForms/FormHeader/FormHeader";

import FinancialInfoForm from "../../Components/Forms/BuyerRelatedForms/FinancialInfoForm/FinancialInfoForm";

const index = () => {
  return (
    <>
      <main className="form-header-container">
        <FormHeader {...financialInfo} />
        <form>
          <FinancialInfoForm {...financialInfo} />
        </form>
      </main>
    </>
  );
};

export default index;
