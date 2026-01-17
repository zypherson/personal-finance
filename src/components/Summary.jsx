function Summary({ transactions }) {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
  
    const expenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
  
    const balance = income - expenses;
  
    return (
      <div className="summary">
        <div className="summary-card">
          <h3>Income</h3>
          <p className="income">${income.toFixed(2)}</p>
        </div>
  
        <div className="summary-card">
          <h3>Expenses</h3>
          <p className="expense">${expenses.toFixed(2)}</p>
        </div>
  
        <div className="summary-card">
          <h3>Balance</h3>
          <p className={balance >= 0 ? "income" : "expense"}>
            ${balance.toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
  
  export default Summary;
  