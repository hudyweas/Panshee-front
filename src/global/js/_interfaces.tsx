import React from "react";

export interface RoutingListInterface {
    value: string;
    href: string;
    v?: boolean;
    onClick?: () => void;
    element?: JSX.Element;
    child?: RoutingListInterface[];
}

export class Wallet {
    walletAddress: String;
    tokens: Currency[];
    constructor() {
        this.walletAddress = "";
        this.tokens = [];
    }
}

export class Currency {
    tokenName: String;
    tokenSymbol: String;
    amount: GLfloat;
    priceUSD: GLfloat;
    priceChangePercentage24h: GLfloat;
    constructor() {
        this.tokenName = "";
        this.tokenSymbol = "";
        this.amount = 0;
        this.priceUSD = 0;
        this.priceChangePercentage24h = 0;
    }
}
