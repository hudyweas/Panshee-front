import { useEffect, useState } from "react";

import { AvatarProps } from "../../global/js/_props";
import styles from "./Avatar.module.scss";

const Avatar = (props: AvatarProps) => {
    const [username, setUsername] = useState("");

    return (
        <div className={styles["background"]}>
            <svg width="100%" viewBox="-50 -50 100 100" version="1.1">
                <title>{username}</title>
                <text className={styles["text"]} dy="0.35em">
                    {username[0]}
                </text>
            </svg>
        </div>
    );
};

export default Avatar;
