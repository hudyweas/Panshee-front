import Header from "../../../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

function LoggedOut() {
    return (
        <Router>
            <Header auth={false}></Header>
        </Router>
    );
}

export default LoggedOut;
