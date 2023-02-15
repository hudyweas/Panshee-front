import styles from "./Login.module.scss";
import { signStateService } from "../../../redux/signStateService";
import Button from "../../Button/Button";
import AppLink from "../../AppLink/AppLink";
import SvgImage from "../../SvgImage/SvgImage";
import LoginForm from "../../../global/Forms/LoginForm/LoginForm";
import FullScreenBlocker from "../../FullScreenBlocker/FullScreenBlocker";

const Login = () => {
    return (
        <FullScreenBlocker>
            <div className={styles["container"]}>
                <div className={styles["contentBox"]}>
                    <div className={styles["logoBox"]}>
                        <SvgImage size="40" type={"logo"} />
                    </div>

                    <div className={styles["welcomeBox"]}>
                        <span>Welcome on Panshee</span>
                    </div>

                    <div className={styles["formBox"]}>
                        <LoginForm />
                    </div>

                    <div className={styles["simple-horizontal-line"]}></div>

                    <div className={styles["footerLinks"]}>
                        <div className={styles["footerLinks"]}>
                            <Button
                                className={"smallText"}
                                value={"Not on Panshee yet? Sign up"}
                                onClick={() => {
                                    signStateService.changeState("signup");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FullScreenBlocker>
    );
};

export default Login;
