const BUDGET_KEY = "finance_budgets";

export function getBudgets() {
  return JSON.parse(localStorage.getItem(BUDGET_KEY)) || {};
}

export function saveBudgets(budgets) {
  localStorage.setItem(BUDGET_KEY, JSON.stringify(budgets));
}
