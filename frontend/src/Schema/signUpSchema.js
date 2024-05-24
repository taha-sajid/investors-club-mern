import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(4, "The value you entered isn't valid.")
    .max(25)
    .required("Please enter your name"),
  email: Yup.string()
    .email("This is not a valid email address")
    .required("You must provide e-mail to log in."),
  password: Yup.string().min(8).required("Please enter your password"),
  passwordConfirm: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must be matched"),
});
