import React from "react"
import './index.css'
import Header from "./Components/Header.jsx"
import Balance from "./Components/Balance.jsx"
import IncomeExpenses from "./Components/IncomeExpenses.jsx"
import TransactionList from "./Components/TransactionList.jsx"
import AddTransaction from "./Components/AddTransaction.jsx"
import {GlobalProvider} from "./Context/GlobalState.jsx"


function App() {  

  return (
    <>
    <GlobalProvider>
    <Header />
    
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
    </>
  )
}

export default App
