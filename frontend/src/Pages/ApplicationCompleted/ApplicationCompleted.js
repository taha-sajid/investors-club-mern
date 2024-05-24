import { applicationCompleted } from "../../assets/RequiredData/FormData";
import FormHeader from "../../Components/Forms/CommonForms/FormHeader/FormHeader";
import React from "react";

const index = () => {
  return (
    <>
      <main className="form-header-container ">
        <FormHeader {...applicationCompleted} />
      </main>
    </>
  );
};

export default index;
