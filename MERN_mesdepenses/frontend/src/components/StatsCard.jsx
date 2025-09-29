import { formatAmount, CATEGORY_COLORS } from "../utils/formatters";

function StatsCard({ stats }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Statistiques
      </h2>

      {/* Total */}
      <div className="bg-blue-600 dark:bg-blue-700 p-4 rounded-lg mb-4">
        <p className="text-blue-100 text-sm mb-1">Total</p>
        <p className="text-white text-3xl font-bold">
          {formatAmount(stats.total)}
        </p>
      </div>

      {/* Par cat */}
      <div className="space-y-2">
        {stats.byCategory.length === 0 ? (
          <p className="text-center text-gray-400 dark:text-gray-500 py-4 text-sm">
            Aucune donnée
          </p>
        ) : (
          stats.byCategory.map((cat) => (
            <div
              key={cat._id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[cat._id] }}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {cat._id}
                </span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-sm">
                {formatAmount(cat.total)}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default StatsCard;
