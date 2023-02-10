import { Cookies } from "react-cookie";

export const logOut = () => {
    const cookie = new Cookies();
    cookie.remove("session_id");
    cookie.remove("access_token");
    cookie.remove("refresh_token");
    cookie.remove("user_id");
    window.location.href = "/";
};

export const isLoggedIn = () => {
    const cookie = new Cookies();
    let user = cookie.get("user_id");
    let token = cookie.get("access_token");
    if (user != null && token != null) {
        return true;
    }
    return false;
};
