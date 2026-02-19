import { useState } from "react";

const CATEGORIES = [
  "Rent",
  "Food",
  "Transport",
  "Utilities",
  "Entertainment",
  "Other",
];

function BudgetForm({ onSetBudget }) {
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount) return;

    onSetBudget(category, amount);
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="budget-form">
      <h2>Set Monthly Budget</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Budget amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Set Budget</button>
    </form>
  );
}

export default BudgetForm;
