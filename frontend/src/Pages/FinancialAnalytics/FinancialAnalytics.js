import React from "react";
import { financialAnalytics } from "../../assets/RequiredData/FormData";
import FormHeader from "../../Components/Forms/CommonForms/FormHeader/FormHeader";
import FinancialAnalyticsForm from "../../Components/Forms/SellerRelatedForms/FinancialsAnalytics/FinancialAnalyticsForm";
const FinancialAnalytics = () => {
  return (
    <main className="form-header-container">
      <FormHeader {...financialAnalytics} />
      <FinancialAnalyticsForm />
    </main>
  );
};

export default FinancialAnalytics;
