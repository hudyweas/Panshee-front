import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/MainPage/App";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <React.StrictMode>
    <>
        <CookiesProvider>
            <App />
        </CookiesProvider>
        <Footer></Footer>
    </>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
