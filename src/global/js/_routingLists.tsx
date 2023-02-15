import { logOut } from "./_functions";
import { RoutingListInterface } from "./_interfaces";

export const moreOptionsRoutingList: RoutingListInterface[] = [
    { value: "Settings", href: "/settings" },
    { value: "Wallets Details", href: "/" },
    { value: "Log out", href: "", onClick: logOut },
];
