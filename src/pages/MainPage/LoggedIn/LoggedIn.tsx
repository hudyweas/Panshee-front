import Header from "../../../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { isLoggedIn } from "../../../global/js/_functions";
import WalletPage from "../../WalletPage/WalletPage";

function LoggedIn() {
    const [logged, setLogged] = useState<true | false>();

    useEffect(() => {
        setLogged(isLoggedIn());
    }, []);

    if (logged) {
        return (
            <Router>
                <Header auth={true}></Header>
                <WalletPage></WalletPage>
            </Router>
        );
    } else {
        return <></>;
    }
}

export default LoggedIn;
