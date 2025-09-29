function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id, todo.completed)}
        className="w-5 h-5 cursor-pointer accent-blue-600"
      />
      <span
        className={`flex-1 text-lg ${
          todo.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo._id)}
        className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition transform hover:scale-105"
      >
        Supprimer
      </button>
    </div>
  );
}

export default TodoItem;
