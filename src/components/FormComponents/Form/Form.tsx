import styles from "./Form.module.scss";
import { Formik } from "formik";
import { FormProps } from "../../../global/js/_props";

const Form = (props: FormProps) => {
    function getFormContent() {
        return props.children;
    }

    return (
        <div>
            {props.header && <div className={styles["header"]}>{props.header}</div>}
            {props.description && <div className={styles["description"]}>{props.description}</div>}
            <Formik
                initialValues={{}}
                validationSchema={props.validationSchema}
                onSubmit={props.onSubmit}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <div className={styles["formWrapper"]}>{getFormContent()}</div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Form;
