import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Wrong format").required("Email is required"),
  password: Yup.string().min(8, "Too short").required("Password is required"),
});
