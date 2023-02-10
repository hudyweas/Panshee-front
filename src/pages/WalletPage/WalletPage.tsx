import WalletList from "../../components/WalletList/WalletList";
import { getWallets } from "../../global/js/_api";
import { Cookies } from "react-cookie";
import { Wallet } from "../../global/js/_interfaces";
import { useState, useEffect } from "react";

const WalletPage = () => {
    const [loading, setLoading] = useState<true | false>(true);

    const cookie = new Cookies();

    let wallets = new Array<Wallet>();

    let setWallet = (wallet: Wallet[]) => {
        wallets = wallet;
    };

    let getWalletData = () => {
        return wallets;
    };

    useEffect(() => {
        getWallets(cookie.get("user_id"), "").then((wallet) => {
            setWallet(wallet);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <>loading</>;
    } else {
        return <WalletList wallets={getWalletData()}></WalletList>;
    }
};

export default WalletPage;
