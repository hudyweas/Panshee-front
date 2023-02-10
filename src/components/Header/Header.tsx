import Button from "../Button/Button";
import AppLink from "../AppLink/AppLink";
import styles from "./Header.module.scss";

import { signStateService } from "../../redux/signStateService";
import LoginMenu from "../LoginMenu/LoginMenu";
import PopUp from "../PopUp/PopUp";
import AppList from "../AppList/AppList";
import SvgImage from "../SvgImage/SvgImage";
import AppInput from "../AppInput/AppInput";
import {
    createPopUpRoutingList,
    moreOptionsRoutingList,
    yourAccountsRoutingList,
} from "../../global/js/_routingLists";
import { HeaderProps } from "../../global/js/_props";

const Header = (props: HeaderProps) => {
    const CreatePopUp = (
        <div className={styles["createPopUp"]}>
            <AppList appList={createPopUpRoutingList} />
        </div>
    );

    if (props.auth === false) {
        return (
            <>
                <LoginMenu></LoginMenu>
                <header className={styles["header"]}>
                    <div className={styles["container"]}>
                        <AppLink value="Pinterest" type="fulllogo" />

                        <div className={styles["links-wrapper"]}>
                            <div className={styles.links}>
                                <AppLink href="/info" value="Informations" />
                                <AppLink href="/business" value="For Business" />
                                <AppLink href="/newsroom" value="Blog" />
                            </div>

                            <Button
                                className="logIn"
                                value="Log In"
                                onClick={() => {
                                    signStateService.changeState("login");
                                }}
                            />
                            <Button
                                className="signIn"
                                value="Sign In"
                                onClick={() => {
                                    signStateService.changeState("signup");
                                }}
                            />
                        </div>
                    </div>
                </header>
            </>
        );
    } else {
        return (
            <header className={styles["header"]}>
                <div className={styles["container"]}>
                    <div className={styles["flexWrapper"]}>
                        <div className={styles["flex"]}>
                            <AppLink type="img" href="/">
                                <SvgImage size="24px" type="logo" />
                            </AppLink>
                        </div>

                        <div className={styles["searchWrapper"]}></div>

                        <div className={styles["flex"]}>
                            <PopUp
                                button={
                                    <AppLink type="img" className="width24">
                                        <SvgImage type={"v"} size={"12px"} />
                                    </AppLink>
                                }
                                hover={<span>Accounts and more options</span>}
                                mode="hover"
                                html={
                                    <div className={styles["accountsMenu"]}>
                                        <div className="">
                                            <AppList header="Currently in" appList={[]}></AppList>
                                        </div>
                                        <AppList
                                            header="Your accounts"
                                            appList={yourAccountsRoutingList}
                                        ></AppList>
                                        <AppList
                                            header="More options"
                                            appList={moreOptionsRoutingList}
                                        ></AppList>
                                    </div>
                                }
                            ></PopUp>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};

export default Header;
