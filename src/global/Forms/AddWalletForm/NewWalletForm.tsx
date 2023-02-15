import FormField from "../../../components/FormComponents/FormField/FormField";
import FormButton from "../../../components/FormComponents/FormButton/FormButton";
import Form from "../../../components/FormComponents/Form/Form";
import { addWallet_ValidationSchema } from "../../js/_validations";
import { addWallet } from "../../js/_api";
import styles from "./NewWalletForm.module.scss";

const NewWalletForm = () => {
    return (
        <Form
            validationSchema={addWallet_ValidationSchema}
            onSubmit={(values, actions) => {
                addWallet(values.walletAddress);
            }}
        >
            <FormField
                type={"text"}
                name={"walletAddress"}
                headerText={"Wallet Address"}
            ></FormField>

            <FormButton value={"Add wallet"} />
        </Form>
    );
};

export default NewWalletForm;
