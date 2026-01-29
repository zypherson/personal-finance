import { useState } from "react";

const CATEGORIES = [
  "Salary",
  "Rent",
  "Food",
  "Transport",
  "Utilities",
  "Entertainment",
  "Other",
];

function TransactionForm({  onAdd,
  onUpdate,
  editingTransaction,
  onCancelEdit,}) {
  const isEditing = Boolean(editingTransaction);

const [type, setType] = useState(editingTransaction?.type || "expense");
const [amount, setAmount] = useState(editingTransaction?.amount || "");
const [category, setCategory] = useState(
  editingTransaction?.category || "Food"
);
const [description, setDescription] = useState(
  editingTransaction?.description || ""
);
const [date, setDate] = useState(
  editingTransaction?.date ||
    new Date().toISOString().split("T")[0]
);



  function handleSubmit(e) {
  e.preventDefault();
  if (!amount) return;

  const transaction = {
    id: editingTransaction?.id || crypto.randomUUID(),
    type,
    amount: Number(amount),
    category,
    description,
    date,
  };

  if (isEditing) {
    onUpdate(transaction);
  } else {
    onAdd(transaction);
  }

  setAmount("");
  setDescription("");
}


  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h2>Add Transaction</h2>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">
  {isEditing ? "Save Changes" : "Add"}
</button>

{isEditing && (
  <button
    type="button"
    className="cancel-btn"
    onClick={onCancelEdit}
  >
    Cancel
  </button>
)}
    </form>
  );
}

export default TransactionForm;
