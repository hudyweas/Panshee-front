import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import SvgImage from "../SvgImage/SvgImage";
import styles from "./AppInput.module.scss";

const AppInput = () => {
    const [active, setActive] = useState(false);

    return (
        <div className={styles["container"]}>
            <div className={styles["searchWrapper"]}>
                {!active && (
                    <div className={styles["searchIconWrapper"]}>
                        <SvgImage type={"search"} size={"16"} />
                    </div>
                )}
                <input
                    className={styles["searchBox"]}
                    type="text"
                    aria-activedescendant=""
                    aria-autocomplete="list"
                    aria-controls="SuggestionsMenu"
                    aria-describedby="searchBoxAccessibleText"
                    aria-label="Search"
                    data-test-id="search-box-input"
                    name="searchBoxInput"
                    placeholder="Search"
                    onClick={() => setActive(true)}
                />
            </div>
            {active && (
                <ClickAwayListener onClickAway={() => setActive(false)}>
                    <div className={styles["popup"]}></div>
                </ClickAwayListener>
            )}
        </div>
    );
};

export default AppInput;
