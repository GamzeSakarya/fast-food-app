import * as Yup from "yup";

export const adminSchema = Yup.object({
  username: Yup.string().required("username is required."),
  password: Yup.string().required("Password is required."),
});
