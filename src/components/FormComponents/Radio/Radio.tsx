import { useState } from "react";
import { RadioProps } from "../../../global/js/_props";
import styles from "./Radio.module.scss";

const Radio = (props: RadioProps) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <label htmlFor={props.value}>
            <div className={styles["container"]}>
                <input type={"radio"} name={props.name} value={props.value} id={props.value} />
            </div>
        </label>
    );
};

export default Radio;
