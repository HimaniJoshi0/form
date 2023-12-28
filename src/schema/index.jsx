import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(30).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Please confirm your password"),
    gender: Yup.string().required("Please select your gender"),
    check_box: Yup.boolean().oneOf([true], "Please accept terms and conditions"),

});

