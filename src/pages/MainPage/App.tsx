import LoggedOut from "./LoggedOut/LoggedOut";
import LoggedIn from "./LoggedIn/LoggedIn";

import { useEffect, useState } from "react";
import { isLoggedIn } from "../../global/js/_functions";

function App() {
    const [logged, setLogged] = useState<true | false>();

    useEffect(() => {
        setLogged(isLoggedIn());
    });

    if (logged === undefined) {
        return <></>;
    }

    if (logged) {
        return <LoggedIn />;
    } else {
        return <LoggedOut />;
    }
}

export default App;
