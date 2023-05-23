import React from "react";
import { GlobalContext } from "../Context/GlobalState.jsx";

export default function Balance(){
    const { transactions } = React.useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 >${total}</h1>
        </>
            )
            }