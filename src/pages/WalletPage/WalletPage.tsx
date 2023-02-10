import WalletList from "../../components/WalletList/WalletList";
import { getWallets } from "../../global/js/_api";
import { Cookies } from "react-cookie";
import { Wallet } from "../../global/js/_interfaces";
import { useState, useEffect } from "react";

const WalletPage = () => {
    const [loading, setLoading] = useState<true | false>(true);
    const [wallets, setWallet] = useState<Wallet[]>([]);

    const cookie = new Cookies();

    useEffect(() => {
        getWallets(cookie.get("user_id"), "").then((wallet) => {
            if (wallet.length > 0) {
                setWallet(wallet);
            }
            setLoading(false);
        });
    }, []);

    if (loading || wallets.length === 0) {
        return <>loading</>;
    } else {
        return <WalletList wallets={wallets}></WalletList>;
    }
};

export default WalletPage;
