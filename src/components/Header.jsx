function Header({ balance, selectedMonth }) {
  const monthLabel = new Date(selectedMonth + "-01").toLocaleDateString(
    undefined,
    { month: "long", year: "numeric" }
  );

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="app-title">Finance Dashboard</h1>
        <span className="month-label">{monthLabel}</span>
      </div>

      <div className="header-right">
        <span className="balance-label">Balance</span>
        <span className="balance-value">
          ${balance.toFixed(2)}
        </span>
        
      </div>
    </header>
  );
}

export default Header;
