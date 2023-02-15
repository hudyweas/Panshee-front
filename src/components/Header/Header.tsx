import AppLink from "../AppLink/AppLink";
import styles from "./Header.module.scss";

import PopUp from "../PopUp/PopUp";
import AppList from "../AppList/AppList";
import SvgImage from "../SvgImage/SvgImage";

import { moreOptionsRoutingList } from "../../global/js/_routingLists";
import { HeaderProps } from "../../global/js/_props";

const Header = (props: HeaderProps) => {
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
                        >
                            <div className={styles["accountsMenu"]}>
                                <AppList
                                    header="More options"
                                    appList={moreOptionsRoutingList}
                                ></AppList>
                            </div>
                        </PopUp>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
