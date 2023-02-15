import Header from "../../../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import LoginMenu from "../../../components/LoginMenu/LoginMenu";

function LoggedOut() {
    return (
        <Router>
            <LoginMenu></LoginMenu>
        </Router>
    );
}

export default LoggedOut;
