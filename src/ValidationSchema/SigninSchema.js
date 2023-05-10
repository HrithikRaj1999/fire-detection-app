import * as yup from "yup";

export const SigninSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
