/* eslint-disable no-unused-vars */
import { useState } from "react";
import { getTransactions, saveTransactions } from "./utils/storage";

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

      <p>Transactions: {transactions.length}</p>
    </div>
  );
}

export default App;
