function BudgetList({ budgets, transactions }) {
  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );

  const spentByCategory = expenses.reduce((acc, curr) => {
    acc[curr.category] =
      (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  return (
    <div>
      <h2>Budget Status</h2>

      {Object.keys(budgets).length === 0 && (
        <p>No budgets set.</p>
      )}

      {Object.entries(budgets).map(([category, limit]) => {
        const spent = spentByCategory[category] || 0;
        const remaining = limit - spent;
        const overBudget = remaining < 0;

        return (
          <div key={category} className="budget-card">
            <strong>{category}</strong>

            <p>
              ${spent.toFixed(2)} / ${limit.toFixed(2)}
            </p>

            {overBudget && (
              <p className="over-budget">
                ⚠ Over budget by ${Math.abs(remaining).toFixed(2)}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BudgetList;
