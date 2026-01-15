/* eslint-disable no-unused-vars */
import { useState } from "react";
import { getTransactions, saveTransactions } from "./utils/storage";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState(() =>
    getTransactions()
  );

  function addTransaction(newTransaction) {
    const updated = [newTransaction, ...transactions];
    setTransactions(updated);
    saveTransactions(updated);
  }

  return (
    <div>
      <h1>Personal Finance Snapshot</h1>
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} />
      <p>Transactions: {transactions.length}</p>
    </div>
  );
}

export default App;
