import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  // utilise custom hook
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos();

  // affiche un loader pendant le chargement
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-2xl text-gray-600">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Titre */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Ma Todo List MERN
          </h1>

          {/* Message d'erreur si besoin */}
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Formulaire d'ajout */}
          <TodoForm onAdd={addTodo} />

          {/* Liste des taches */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Mes tâches ({todos.length})
              </h2>
              <div className="text-sm text-gray-500">
                {todos.filter((t) => t.completed).length} terminée(s)
              </div>
            </div>

            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
