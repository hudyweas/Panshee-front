import Header from "../../../components/Header/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { isLoggedIn } from "../../../global/js/_functions";
import WalletPage from "../../WalletPage/WalletPage";
import SettingsPage from "../../SettingsPage/SettingsPage";

function LoggedIn() {
    const [logged, setLogged] = useState<true | false>();

    useEffect(() => {
        setLogged(isLoggedIn());
    }, []);

    if (logged) {
        return (
            <Router>
                <Header auth={true}></Header>
                <Routes>
                    <Route path="/" element={<WalletPage></WalletPage>}></Route>
                    <Route path="/settings" element={<SettingsPage></SettingsPage>}></Route>
                </Routes>
            </Router>
        );
    } else {
        return <></>;
    }
}

export default LoggedIn;
