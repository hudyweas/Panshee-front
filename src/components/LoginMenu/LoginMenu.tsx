import { useEffect, useState } from "react";
import { subscriber } from "../../redux/signStateService";
import SignUp from "./Signup/SignUp";
import Login from "./Login/Login";

const LoginMenu = () => {
    const [modeState, setModeState] = useState<"main" | "login" | "signup">("main");

    const handleState = (state: string) => {
        if (state === "login") return "login";
        else if (state === "signup") return "signup";
        else return "main";
    };

    useEffect(() => {
        subscriber.subscribe((state) => {
            setModeState(handleState(state));
        });
    });

    if (modeState === "login") {
        return <Login />;
    } else {
        return <SignUp />;
    }
};

export default LoginMenu;
