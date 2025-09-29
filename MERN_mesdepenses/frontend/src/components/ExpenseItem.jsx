import { formatAmount, formatDate, CATEGORY_COLORS } from "../utils/formatters";

function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition">
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 dark:text-white">
          {expense.description}
        </h3>
        <div className="flex gap-2 mt-1 text-sm text-gray-500 dark:text-gray-400">
          <span
            className="px-2 py-0.5 rounded text-xs font-medium"
            style={{
              backgroundColor: CATEGORY_COLORS[expense.category] + "20",
              color: CATEGORY_COLORS[expense.category],
            }}
          >
            {expense.category}
          </span>
          <span>{formatDate(expense.date)}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          {formatAmount(expense.amount)}
        </span>
        <button
          onClick={() => onDelete(expense._id)}
          className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
