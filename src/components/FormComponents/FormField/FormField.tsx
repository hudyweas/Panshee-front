import styles from "./FormField.module.scss";
import { Field, ErrorMessage } from "formik";
import { FormFieldProps } from "../../../global/js/_props";

const FormField = (props: FormFieldProps) => {
    const as = () => {
        if (props.type === "textarea") return "textarea";
        else if (props.type === "select") return "select";
        else return "input";
    };

    return (
        <fieldset>
            <span
                className={`${styles["fieldHeader"]} ${
                    props.headerMargin ? styles["marginHeader"] : null
                }`}
            >
                {props.headerText}
            </span>
            <Field
                className={`${styles["inputNormal"]} ${styles[props.type]}`}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                as={as()}
                rows="3"
                value={props.value}
            />
            <span className={styles["error"]}>
                <ErrorMessage name={props.name} />
            </span>
        </fieldset>
    );
};

export default FormField;
