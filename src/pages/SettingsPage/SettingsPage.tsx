import WalletList from "../../components/WalletList/WalletList";
import { getWallets } from "../../global/js/_api";
import { Cookies } from "react-cookie";
import { Wallet } from "../../global/js/_interfaces";
import { useState, useEffect } from "react";
import NewWalletForm from "../../global/Forms/AddWalletForm/NewWalletForm";
import styles from "./SettingPage.module.scss";

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

    if (loading) {
        return <>loading</>;
    } else {
        return (
            <>
                <div className={styles.container}>
                    <div className={styles.walletForm}>
                        <NewWalletForm></NewWalletForm>
                    </div>
                    <WalletList wallets={wallets} settings={true}></WalletList>
                </div>
            </>
        );
    }
};

export default WalletPage;
