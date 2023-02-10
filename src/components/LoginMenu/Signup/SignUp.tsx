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
                <div
                    className={styles["buttonContainer"]}
                    onClick={() => {
                        signStateService.changeState("main");
                    }}
                >
                    <div className={styles["closeButtonWrapper"]}>
                        <svg
                            className={styles["closeButton"]}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            role="img"
                        >
                            <path d="m15.18 12 7.16-7.16c.88-.88.88-2.3 0-3.18-.88-.88-2.3-.88-3.18 0L12 8.82 4.84 1.66c-.88-.88-2.3-.88-3.18 0-.88.88-.88 2.3 0 3.18L8.82 12l-7.16 7.16c-.88.88-.88 2.3 0 3.18.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66L12 15.18l7.16 7.16c.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66.88-.88.88-2.3 0-3.18L15.18 12z"></path>{" "}
                        </svg>
                    </div>
                </div>

                <div className={styles["contentBox"]}>
                    <div className={styles["logoBox"]}>
                        <SvgImage size="40" type={"logo"} />
                    </div>

                    <div className={styles["welcomeBox"]}>
                        <span>Welcome on Pinterest</span>
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
