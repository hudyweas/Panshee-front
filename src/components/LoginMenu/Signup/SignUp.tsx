import styles from "./SignUp.module.scss";
import { signStateService } from "../../../redux/signStateService";
import SignupForm from "../../../global/Forms/SignupForm/SignupForm";
import Button from "../../Button/Button";
import AppLink from "../../AppLink/AppLink";
import SvgImage from "../../SvgImage/SvgImage";
import FullScreenBlocker from "../../FullScreenBlocker/FullScreenBlocker";

const SignUp = () => {
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
                        <SignupForm />
                    </div>
                    <div className={styles["simple-horizontal-line"]}></div>

                    <div className={styles["footerLinks"]}>
                        <div className={styles["footerLinks"]}>
                            <Button
                                className={"smallText"}
                                value={"Already have an account? Log in"}
                                onClick={() => {
                                    signStateService.changeState("login");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FullScreenBlocker>
    );
};

export default SignUp;
