import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28EFF",
  "#FF6699",
];

function ExpenseChart({ transactions }) {
  // Only expenses
  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );

  // Group by category
  const data = Object.values(
    expenses.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = {
          name: curr.category,
          value: 0,
        };
      }

      acc[curr.category].value += curr.amount;

      return acc;
    }, {})
  );

  if (data.length === 0) {
    return <p>No expense data for this month.</p>;
  }

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Spending Breakdown</h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;
