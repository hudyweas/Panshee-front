import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { PopUpProps } from "../../global/js/_props";
import styles from "./PopUp.module.scss";

const PopUp = (props: PopUpProps) => {
    const [popup, setPopup] = useState(false);
    const [hover, setHover] = useState(false);

    const buttonId = "popupbutton" + Math.random() * 1000;
    const popupId = "popup" + Math.random() * 1000;

    const updateMargin = () => {
        const popup = document.getElementById(popupId);
        const button = document.getElementById(buttonId);

        if (popup && button) {
            const popupWidth = popup.offsetWidth;
            const buttonWidth = button.offsetWidth;

            const buttonCenter = button.getBoundingClientRect().x + buttonWidth / 2;

            if (buttonCenter + popupWidth / 2 > window.innerWidth) {
                popup.style.setProperty("right", "0");
            } else if (buttonCenter - popupWidth / 2 < 0) popup.style.setProperty("left", "0");
            else {
                const widthString = "-" + (popupWidth - buttonWidth) / 2 + "px";
                popup.style.setProperty("margin-left", widthString);
            }
        }
    };

    useEffect(() => {
        updateMargin();
    });

    if (props.mode === "hover") {
        return (
            <div className={styles["container"]}>
                <div
                    id={buttonId}
                    className={styles["button"]}
                    onClick={() => setPopup(true)}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {props.button}
                    {hover && !popup && (
                        <div id={popupId} className={`${styles["popup"]} ${styles["hoverTheme"]}`}>
                            {props.hover}
                        </div>
                    )}
                    {popup && (
                        <ClickAwayListener onClickAway={() => setPopup(false)}>
                            <div id={popupId} className={styles["popup"]}>
                                {props.html}
                            </div>
                        </ClickAwayListener>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles["container"]}>
                <div id={buttonId} className={styles["button"]} onClick={() => setPopup(true)}>
                    {props.button}
                    {popup && (
                        <ClickAwayListener onClickAway={() => setPopup(false)}>
                            <div id={popupId} className={styles["popup"]}>
                                {props.html}
                            </div>
                        </ClickAwayListener>
                    )}
                </div>
            </div>
        );
    }
};

export default PopUp;
