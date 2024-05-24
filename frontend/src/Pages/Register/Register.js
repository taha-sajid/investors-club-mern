import React from "react";
import FormHeader from "../../Components/Forms/CommonForms/FormHeader/FormHeader";
import RegisterForm from "../../Components/Forms/CommonForms/RegistrationForm/RegistrationForm";

import { register } from "../../assets/RequiredData/FormData";

const index = () => {
  return (
    <>
      <FormHeader {...register} />
      <main className="form-header-container">
        <RegisterForm />
      </main>
    </>
  );
};

export default index;
