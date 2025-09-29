import { useExpenses } from "./hooks/useExpenses";
import { ThemeProvider } from "./contexts/ThemeContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import StatsCard from "./components/StatsCard";
import ThemeToggle from "./components/ThemeToggle";

function AppContent() {
  const { expenses, stats, loading, error, addExpense, deleteExpense } =
    useExpenses();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-xl text-gray-600 dark:text-gray-400">
          Chargement...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            Tracker de Dépenses
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gérez vos finances simplement
          </p>
        </div>

        {/* Erreur */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800">
            {error}
          </div>
        )}

        {/* Grille */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Gauche */}
          <div className="lg:col-span-2 space-y-6">
            <ExpenseForm onAdd={addExpense} />
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
          </div>

          {/* Droite */}
          <div>
            <StatsCard stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
