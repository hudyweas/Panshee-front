import { WalletListProps } from "../../global/js/_props";
import styles from "./WalletList.module.scss";

const WalletList = (props: WalletListProps) => {
    const preparedList = () => {
        let preparedList = [];

        console.log(props.wallets);

        for (let i = 0; i < props.wallets.length; i++) {
            preparedList.push(<div className="row">{props.wallets[i].walletAddress}</div>);
        }

        props.wallets.map((wallet) => {
            <div className="container"></div>;
        });

        return preparedList;
    };

    return <div className={styles["container"]}>{preparedList()}</div>;
};

export default WalletList;
