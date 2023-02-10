import { logOut } from "./_functions";
import { RoutingListInterface } from "./_interfaces";

export const settingsPageRoutingList: RoutingListInterface[] = [
    { value: "Personal Informations", href: "/settings/personal-informations" },
    { value: "Account management", href: "/settings/account-settings" },
    {
        value: "Tune your home feed ",
        href: "/settings/edit",
    },
    { value: "Claimed accounts", href: "/settings/claim" },
    { value: "Social permissions", href: "/settings/permissions" },
    { value: "Notifications", href: "/settings/notifications" },
    { value: "Privacy and data", href: "/settings/privacy" },
    { value: "Security and logins", href: "/settings/security" },
];

export const createPopUpRoutingList: RoutingListInterface[] = [
    {
        value: "Create Idea Pin",
        href: "/idea-pin-builder/",
    },
    { value: "Create  Pin", href: "/pin-builder/" },
];

export const yourAccountsRoutingList: RoutingListInterface[] = [
    { value: "Add account", href: "/add-account" },
    {
        value: "Convert to business",
        href: "/convert-business/",
    },
];

export const moreOptionsRoutingList: RoutingListInterface[] = [
    { value: "Settings", href: "/settings" },
    { value: "Tune your home feed", href: "/edit" },
    { value: "Install the Windows app", href: "" },
    { value: "Get help", href: "", v: true },
    {
        value: "See terms and privacy",
        href: "",
        v: true,
    },
    { value: "Log out", href: "", onClick: logOut },
];
