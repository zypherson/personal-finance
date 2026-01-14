function TransactionList({ transactions }) {
    if (transactions.length === 0) {
      return <p>No transactions yet.</p>;
    }
  
    return (
      <div className="transaction-list">
        <h2>Transactions</h2>
  
        <ul>
          {transactions.map((t) => (
            <li
              key={t.id}
              className={`transaction ${t.type}`}
            >
              <div>
                <strong>{t.category}</strong>
                {t.description && <span> – {t.description}</span>}
              </div>
  
              <div className="transaction-meta">
                <span>{t.date}</span>
                <span className="amount">
                  {t.type === "expense" ? "-" : "+"}$
                  {t.amount.toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TransactionList;
  