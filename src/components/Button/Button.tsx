import { ButtonProps } from "../../global/js/_props";
import styles from "./Button.module.scss";

const Button = (props: ButtonProps) => {
    return (
        <>
            {props.children && (
                <div className={`font--primary ${styles[props.className]}`} onClick={props.onClick}>
                    {props.children}
                </div>
            )}
            {!props.children && (
                <button className={` ${styles[props.className]}`} onClick={props.onClick}>
                    {props.value}
                </button>
            )}
        </>
    );
};

export default Button;
