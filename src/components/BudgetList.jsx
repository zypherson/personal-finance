function BudgetList({ budgets, transactions }) {
  // Only expense transactions
  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );

  // Sum expenses by category
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
            <strong>{category}</strong>

            {/* progress bar */}
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
