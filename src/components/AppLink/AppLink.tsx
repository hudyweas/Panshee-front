import { Link } from "react-router-dom";
import { LinkProps } from "../../global/js/_props";
import SvgImage from "../SvgImage/SvgImage";
import styles from "./AppLink.module.scss";

const AppLink = (props: LinkProps) => {
    if (props.type === "fulllogo") {
        return (
            <div className={styles["fulllogo-container"]}>
                <Link to={"/"} className={styles["link-wrapper"]}>
                    <SvgImage size="32px" type={"logo"} />
                </Link>
            </div>
        );
    } else if (props.type === "img") {
        return (
            <div
                className={`${styles["buttonWrapper"]} ${
                    styles[props.className ? props.className : ""]
                }`}
            >
                <Link to={props.href ? props.href : "/"} className={styles["link-wrapper"]}>
                    {props.children}
                </Link>
            </div>
        );
    } else {
        return (
            <Link
                to={props.href ? props.href : "/"}
                className={styles[props.className ? props.className : "link"]}
                style={{ fontSize: props.size }}
            >
                {props.value}
                {props.v && <SvgImage type={"v"} size={"12px"} />}
            </Link>
        );
    }
};

export default AppLink;
