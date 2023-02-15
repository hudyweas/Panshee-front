import styles from "./SignupForm.module.scss";
import FormField from "../../../components/FormComponents/FormField/FormField";
import FormButton from "../../../components/FormComponents/FormButton/FormButton";
import Form from "../../../components/FormComponents/Form/Form";
import { loginForm_ValidationSchema, signUpForm_ValidationSchema } from "../../js/_validations";
import { logIn, signUp } from "../../js/_api";

const SignUpForm = () => {
    return (
        <Form
            validationSchema={signUpForm_ValidationSchema}
            onSubmit={(values, actions) => {
                signUp(values.email, values.password);
            }}
        >
            <div className={styles["formWrapper"]}>
                <FormField
                    type={"email"}
                    name={"email"}
                    placeholder={"E-mail"}
                    headerText="E-mail address"
                    headerMargin={true}
                />

                <FormField
                    headerText="Password"
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                    headerMargin={true}
                />

                <FormButton value={"Sign up"} />
            </div>
        </Form>
    );
};

export default SignUpForm;
