import SvgImage from "../SvgImage/SvgImage";
import styles from "./AppList.module.scss";
import { Link } from "react-router-dom";
import { AppListProps } from "../../global/js/_props";

const AppList = (props: AppListProps) => {
    const preparedList = () => {
        let preparedList = [];

        for (let i = 0; i < props.appList.length; i++) {
            preparedList.push(
                <Link to={props.appList[i].href}>
                    <div className={styles["linkWrapper"]} style={props.style}>
                        <div className={styles["link"]} onClick={props.appList[i].onClick}>
                            <span>{props.appList[i].value}</span>

                            {props.appList[i].v && (
                                <SvgImage type={"arrow-top-left"} size={"12"}></SvgImage>
                            )}
                        </div>
                    </div>
                </Link>
            );
        }

        return preparedList;
    };

    return (
        <div className={styles["container"]}>
            {props.header && <div className={styles["header"]}>{props.header}</div>}

            {preparedList()}
        </div>
    );
};

export default AppList;
