import { FullScreenBlockerProps } from "../../global/js/_props";
import styles from "./FullScreenBlocker.module.scss";

const FullScreenBlocker = (props: FullScreenBlockerProps) => {
    return (
        <div className={styles["background"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["box"]}>{props.children}</div>
            </div>
        </div>
    );
};

export default FullScreenBlocker;
