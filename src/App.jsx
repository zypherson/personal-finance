/* eslint-disable no-unused-vars */
import { useState } from "react";
import { getTransactions, saveTransactions } from "./utils/storage";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";


function App() {
  const [transactions, setTransactions] = useState(() =>
    getTransactions()
  );

  function addTransaction(newTransaction) {
    const updated = [newTransaction, ...transactions];
    setTransactions(updated);
    saveTransactions(updated);
  }
  function deleteTransaction(id) {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
    saveTransactions(updated);
  }

  return (
    <div>
      <h1>Personal Finance Snapshot</h1>
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      <Summary transactions={transactions} />
 
      <p>Transactions: {transactions.length}</p>
    </div>
  );
}

export default App;
