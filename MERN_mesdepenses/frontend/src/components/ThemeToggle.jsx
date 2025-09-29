import { useTheme } from "../hooks/useTheme";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow-lg z-50"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <span className="text-2xl">Clair</span>
      ) : (
        <span className="text-2xl">sombre</span>
      )}
    </button>
  );
}

export default ThemeToggle;
