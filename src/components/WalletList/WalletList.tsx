import { WalletListProps } from "../../global/js/_props";
import styles from "./WalletList.module.scss";
import PopUp from "../PopUp/PopUp";
import { Currency, Wallet } from "../../global/js/_interfaces";
import SvgImage from "../SvgImage/SvgImage";
import Button from "../Button/Button";
import { deleteWallet } from "../../global/js/_api";

const WalletList = (props: WalletListProps) => {
    const fixNumber = (number: number) => {
        number = Math.round(number * 100) / 100;
        if (number > 1000000) {
            return "A LOT";
        } else if (number < 0.001) {
            return "<0.001";
        }

        return number;
    };

    const displayDetails = (token: Currency, wallet: Wallet) => {
        return (
            <div className={styles.detailsContainer}>
                <div className={styles.details}>
                    <span className={styles.detailsName}>Amount: </span>
                    <span className={styles.detailsData}>{token.amount}</span>
                </div>
                <div>
                    <span className={styles.detailsName}>Total value: </span>
                    <span className={styles.detailsData}>${token.amount * token.priceUSD}</span>
                </div>
                <div>
                    <span className={styles.detailsName}>Percetange value: </span>
                    <span className={styles.detailsData}>
                        {Math.round(
                            ((token.amount * token.priceUSD) / getTotalValue(wallet)) * 10000
                        ) / 100 || 0}
                        %
                    </span>
                </div>
            </div>
        );
    };

    const getTotalValue = (wallet: Wallet) => {
        let sum = 0;
        wallet.tokens.forEach((token) => {
            sum += token.amount * token.priceUSD;
        });

        return sum;
    };

    const displayWallets = () =>
        props.wallets.map((wallet) => (
            <div className={styles.walletContainer}>
                <h4 className={styles.walletHeader}>
                    {wallet.walletAddress}{" "}
                    <p className={styles.totalValue}>
                        Total value: <span>${getTotalValue(wallet)}</span>
                    </p>
                </h4>

                {wallet.tokens.map((token) => (
                    <div className={styles.tokenContainer}>
                        <PopUp
                            button={
                                <div className={styles.tokenNameContainer}>
                                    <span className={styles.tokenName}>{token.tokenName}</span>
                                    <span className={styles.tokenSymbol}>
                                        ({token.tokenSymbol})
                                    </span>
                                </div>
                            }
                        >
                            {displayDetails(token, wallet)}
                        </PopUp>
                        <div className={styles.tokenPriceContainer}>
                            <div className={styles.price}>
                                <PopUp
                                    mode="only-hover"
                                    hover={"$" + token.priceUSD}
                                    button={"$" + fixNumber(token.priceUSD)}
                                ></PopUp>
                            </div>

                            <span
                                className={
                                    token.priceChangePercentage24h < 0
                                        ? styles.tokenPriceChangeRed
                                        : styles.tokenPriceChangeGreen
                                }
                            >
                                {Math.round(token.priceChangePercentage24h * 100) / 100 || 0}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        ));

    const displaySettings = () =>
        props.wallets.map((wallet) => (
            <div className={styles.walletContainer}>
                <div className={styles.walletAddress}>{wallet.walletAddress}</div>
                <div className={styles.deleteContainer}>
                    <Button className={"img"} onClick={deleteWallet(wallet.walletAddress)}>
                        <SvgImage type={"cross"} size={"16px"}></SvgImage>
                    </Button>
                </div>
            </div>
        ));

    if (props.settings) {
        return (
            <div className={styles.container}>
                <div className={styles.settingsContainer}>{displaySettings()}</div>
            </div>
        );
    } else {
        return <div className={styles.container}>{displayWallets()}</div>;
    }
};

export default WalletList;
