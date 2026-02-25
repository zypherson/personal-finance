import { useState } from "react";

function BudgetList({ budgets, transactions, onUpdateBudget }) {
  const [editingCategory, setEditingCategory] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Only expenses
  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );

  const spentByCategory = expenses.reduce((acc, curr) => {
    acc[curr.category] =
      (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const categories = Object.keys(budgets);

  if (categories.length === 0) {
    return (
      <div>
        <h2>Budget Status</h2>
        <p>No budgets set.</p>
      </div>
    );
  }

  function startEditing(category) {
    setEditingCategory(category);
    setEditValue(budgets[category]);
  }

  function saveEdit() {
    onUpdateBudget(editingCategory, editValue);
    setEditingCategory(null);
    setEditValue("");
  }

  return (
    <div>
      <h2>Budget Status</h2>

      {categories.map((category) => {
        const limit = budgets[category];
        const spent = spentByCategory[category] || 0;

        const percent = Math.min((spent / limit) * 100, 100);
        const overBudget = spent > limit;

        return (
          <div key={category} className="budget-card">
            <div className="budget-header">
              <strong>{category}</strong>

              {editingCategory === category ? (
                <>
                  <input
                    type="number"
                    value={editValue}
                    onChange={(e) =>
                      setEditValue(e.target.value)
                    }
                    className="budget-input"
                  />
                  <button onClick={saveEdit}>Save</button>
                  <button
                    onClick={() => setEditingCategory(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="edit-btn"
                  onClick={() => startEditing(category)}
                >
                  ✎
                </button>
              )}
            </div>

            <div className="progress-bar">
              <div
                className={`progress-fill ${
                  overBudget
                    ? "over"
                    : percent > 80
                    ? "warning"
                    : ""
                }`}
                style={{ width: `${percent}%` }}
              />
            </div>

            <p>
              ${spent.toFixed(2)} / ${limit.toFixed(2)} (
              {percent.toFixed(0)}%)
            </p>

            {overBudget && (
              <p className="over-budget">
                ⚠ Over budget by $
                {(spent - limit).toFixed(2)}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BudgetList;
