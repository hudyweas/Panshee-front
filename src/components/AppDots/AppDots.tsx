import { AppDotsProps } from "../../global/js/_props";
import styles from "./AppDots.module.scss";

const AppDots = (props: AppDotsProps) => {
    const prepareDots = () => {
        let table: any = [];

        for (let i = 0; i < props.howMany; i++) {
            table[i] = (
                <div
                    className={`${styles["dot"]}
                    ${styles[i > props.current ? "not-active" : "active"]}`}
                />
            );
        }

        return table;
    };

    return <div className={styles["container"]}>{prepareDots()}</div>;
};

export default AppDots;
