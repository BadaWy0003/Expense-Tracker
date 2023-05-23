import React from "react"
import { GlobalContext } from "../Context/GlobalState.jsx";

export default function Transaction(props){
    const { deleteTransaction } = React.useContext(GlobalContext);
 
    const sign = props.transaction.amount > 0? '+': '-';
    return (
        <li className={props.transaction.amount>0?"plus":"minus"}>
                {props.transaction.text} <span>{sign}${Math.abs(props.transaction.amount)}</span><button onClick={()=>deleteTransaction(props.transaction.id)} className="delete-btn">x</button>
                </li>
    )
}