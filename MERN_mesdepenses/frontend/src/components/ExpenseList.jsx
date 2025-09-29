import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { CATEGORIES } from "../utils/formatters";

function ExpenseList({ expenses, onDelete }) {
  const [filter, setFilter] = useState("Toutes");

  const filteredExpenses =
    filter === "Toutes"
      ? expenses
      : expenses.filter((exp) => exp.category === filter);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Dépenses ({filteredExpenses.length})
        </h2>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Toutes">Toutes</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredExpenses.length === 0 ? (
        <p className="text-center py-8 text-gray-400 dark:text-gray-500">
          Aucune dépense
        </p>
      ) : (
        <div className="space-y-2">
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense._id}
              expense={expense}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
