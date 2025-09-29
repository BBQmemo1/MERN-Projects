import { useEffect, useState } from "react";
import { todoApi } from "../api/todoApi";

export const useTodos = () => {
  // etats pour gerer les donnee
  const [todos, setTodos] = useState([]); // liste des taches
  const [loading, setLoading] = useState(true); // etat de chargement
  const [error, setError] = useState(null); // erreurs

  // charger les taches
  useEffect(() => {
    fetchTodos();
  }, []);

  // fonction get
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await todoApi.getAll();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError("Erreur lors du chargement des tâches");
      console.error("Erreur:", err);
    } finally {
      setLoading(false);
    }
  };

  // fonction create
  const addTodo = async (title) => {
    try {
      const newTodo = await todoApi.create(title);
      setTodos([newTodo, ...todos]); // Ajoute en premier dans la liste
    } catch (err) {
      setError("Erreur lors de l'ajout de la tâche");
      console.error("Erreur:", err);
    }
  };

  // fonction update
  const toggleTodo = async (id, currentStatus) => {
    try {
      const updatedTodo = await todoApi.update(id, {
        completed: !currentStatus, // Inverse le statut
      });
      setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
    } catch (err) {
      setError("Erreur lors de la modification");
      console.error("Erreur:", err);
    }
  };

  // fonction delete
  const deleteTodo = async (id) => {
    try {
      await todoApi.delete(id);
      setTodos(todos.filter((todo) => todo._id !== id)); // Filtre la tâche supprimée
    } catch (err) {
      setError("Erreur lors de la suppression");
      console.error("Erreur:", err);
    }
  };

  // retourne les donnees et fonctions pour les utiliser dans les composants
  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
