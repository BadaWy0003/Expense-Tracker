import React from "react"
import AppReducer from './AppReducer.jsx'

const initialState = {
    transactions: []
}

// CREATE CONTEXT
export const GlobalContext = React.createContext(initialState);

// PROVIDER COMPONENT
export function GlobalProvider({children}){
    const [state , dispatch] = React.useReducer(AppReducer , initialState);

// ACTIONS
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }
      
    function addTransaction(transaction) {
        dispatch({
          type: "ADD_TRANSACTION",
          payload: transaction
        });
      }
    
    return (
        <GlobalContext.Provider value={{transactions: state.transactions , deleteTransaction , addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
