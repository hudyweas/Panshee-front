import { Cookies } from "react-cookie";
import { Currency, Wallet } from "./_interfaces";

export const signUp = async (email: string, password: string) => {
    console.log("here");
    const result = await fetch(process.env.REACT_APP_BACKEND_PATH + "/v1/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: { email },
            password,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error:", error);
        });

    if ((result.status = "200")) {
        logIn(email, password);
    }
};

export const logIn = async (email: string, password: string) => {
    const result = await fetch(process.env.REACT_APP_BACKEND_PATH + "/v1/user:login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error:", error);
        });

    console.log(result);

    if (result.access_token != null) {
        const cookie = new Cookies();

        let age = {
            maxAge: 3600,
        };

        cookie.set("session_id", result.session_id, age);
        cookie.set("access_token", result.access_token, age);
        cookie.set("refresh_token", result.refresh_token, age);
        cookie.set("user_id", result.user.id, age);

        window.location.href = "/";
    } else {
        alert(result.error);
    }
};

export const getWallets = async (user_id: string, walletAddresses: string) => {
    const result = await fetch(
        process.env.REACT_APP_BACKEND_PATH + "/v1/user/" + user_id + "/wallets/" + walletAddresses,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error:", error);
        });

    let wallets = [];

    if (result.wallets != null) {
        for (let i = 0; i < result.wallets.length; i++) {
            let wallet = new Wallet();
            wallet.walletAddress = result.wallets[i].address;

            for (let j = 0; j < result.wallets[i].tokens.length; j++) {
                let token = new Currency();
                token = result.wallets[i].tokens[j];
                wallet.tokens.push(token);
            }

            wallets.push(wallet);
        }
    }

    return wallets;
};

export const addWallet = async (walletAddress: string) => {
    const cookie = new Cookies();
    let user_id = cookie.get("user_id");
    let access_token = cookie.get("access_token");

    const result = await fetch(
        process.env.REACT_APP_BACKEND_PATH + "/v1/user/" + user_id + "/wallets",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                bearer: access_token,
                authorization: `Bearer ${access_token.value}`,
            },
            body: JSON.stringify({
                wallet: {
                    address: walletAddress,
                },
            }),
        }
    )
        .then((response) => {
            // window.location.href = "/settings";
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const deleteWallet = async (walletAddress: String) => {
    const cookie = new Cookies();
    let user_id = cookie.get("user_id");
    let access_token = cookie.get("access_token");

    const result = await fetch(
        process.env.REACT_APP_BACKEND_PATH + "/v1/user/" + user_id + "/wallets" + walletAddress,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                bearer: access_token,
                authorization: `Bearer ${access_token.value}`,
            },
        }
    )
        .then((response) => {
            // window.location.href = "/settings";
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
