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
    age: Yup.string()
        .required("You missed a spot! Let us know how old you are.")
        .max(120, "Please enter a valid number."),
});

export const publicProfileForm_ValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("Your profile needs a name")
        .max(30, "Please enter no more than 30 characters"),
    surname: Yup.string().max(30, "Please enter no more than 30 characters"),
    about: Yup.string().max(500, "Please enter no more than 500 characters"),
    pronouns: Yup.string(),
    website: Yup.string().url("Not a valid url"),
    username: Yup.string().required("Your profile needs a username"),
});

export const usernameForm_ValidationSchema = Yup.object().shape({
    username: Yup.string().required("Whats your name?"),
});
