import styles from "./LoginForm.module.scss";
import AppLink from "../../../components/AppLink/AppLink";
import FormField from "../../../components/FormComponents/FormField/FormField";
import FormButton from "../../../components/FormComponents/FormButton/FormButton";
import Form from "../../../components/FormComponents/Form/Form";
import { loginForm_ValidationSchema } from "../../js/_validations";
import { logIn, signUp } from "../../js/_api";

const LoginForm = () => {
    return (
        <Form
            validationSchema={loginForm_ValidationSchema}
            onSubmit={(values, actions) => {
                logIn(values.email, values.password);
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

                <div className={styles["forgotPasswordWrapper"]}>
                    <AppLink value={"Forgot password?"} size="14px" />
                </div>

                <FormButton value={"Log in"} />
            </div>
        </Form>
    );
};

export default LoginForm;
