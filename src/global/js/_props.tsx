import { RoutingListInterface } from "./_interfaces";
import { Wallet } from "../../global/js/_interfaces";

export interface LinkProps {
    className?: string;
    href?: string;
    type?: string;
    value?: string;
    size?: string;
    v?: boolean;
    children?: any;
}

export interface FormButtonProps {
    value: string;
}

export interface AppListProps {
    header?: string;
    appList: RoutingListInterface[];
    style?: React.CSSProperties;
}

export interface ButtonProps {
    className: string;
    value?: string;
    onClick?: any;
    children?: React.ReactNode;
}

export interface FormProps {
    validationSchema: Object;
    onSubmit: (values: any, actions: any) => void | void;
    children: React.ReactNode;
    initialValues?: {};
    header?: string;
    description?: string;
}

export interface FormFieldProps {
    type: "email" | "password" | "number" | "textarea" | "text" | "select";
    name: string;
    value?: String;
    placeholder?: string;
    headerText: string;
    headerMargin?: boolean;
}

export interface HeaderProps {
    auth: boolean;
}

export interface PopUpProps {
    children?: any;
    button: any;
    hover?: any;
    theme?: string;
    mode?: string;
}

export interface LogoProps {
    type: string;
    size: string;
}

export interface AvatarProps {}

export interface FullScreenBlockerProps {
    children: React.ReactNode;
}

export interface AppDotsProps {
    howMany: number;
    current: number;
}

export interface RadioProps {
    name: string;
    value: string;
    children?: string;
    isChecked: boolean;
    handleChange: () => {};
}

export interface WalletListProps {
    settings?: boolean;
    wallets: Wallet[];
}
