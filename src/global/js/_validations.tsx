import * as Yup from "yup";

export const loginForm_ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Hm... it doesn't look like e-mail address.")
        .required("You missed a spot! Don't forget to add your email."),
    password: Yup.string().required("Please enter your password.").min(5, "Password isn't valid."),
});

export const signUpForm_ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Hm... it doesn't look like e-mail address.")
        .required("You missed a spot! Don't forget to add your email."),
    password: Yup.string()
        .required("Please enter your password.")
        .min(6, "Your password is too short! You need 6+ characters."),
});

export const addWallet_ValidationSchema = Yup.object().shape({
    // wallet: Yup.string().required("You missed a spot! We can't add empy wallet!."),
});
