import { FormButtonProps } from "../../../global/js/_props";
import styles from "./FormButton.module.scss";

const FormButton = (props: FormButtonProps) => {
    return (
        <button className={styles["button"]} type="submit">
            {props.value}
        </button>
    );
};

export default FormButton;
