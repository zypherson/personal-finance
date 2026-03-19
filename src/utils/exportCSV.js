export function exportTransactionsToCSV(transactions, month) {
  if (transactions.length === 0) return;

  const headers = [
    "Date",
    "Type",
    "Category",
    "Description",
    "Amount",
  ];

  const rows = transactions.map((t) => [
    t.date,
    t.type,
    t.category,
    t.description || "",
    t.amount,
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `transactions-${month}.csv`;
  a.click();

  URL.revokeObjectURL(url);
}
