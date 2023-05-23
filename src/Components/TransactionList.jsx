import React from "react"
import {GlobalContext} from "../Context/GlobalState"
import Transaction from "./Transaction.jsx"

export default function TransactionList(){
    const context = React.useContext(GlobalContext)
    console.log(context)

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {context.transactions.map(transaction => (<Transaction key = {transaction.id} transaction = {transaction}/>))}
            </ul>
            </div>
    )
}
