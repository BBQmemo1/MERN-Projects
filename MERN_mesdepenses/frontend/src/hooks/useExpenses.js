import { useState, useEffect } from "react";
import { expenseApi } from "../api/expenseApi";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [stats, setStats] = useState({ byCategory: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les depenses et stats
  useEffect(() => {
    fetchExpenses();
    fetchStats();
  }, []);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const data = await expenseApi.getAll();
      setExpenses(data);
      setError(null);
    } catch (err) {
      setError("Erreur lors du chargement des dépenses");
      console.error("Erreur:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await expenseApi.getStats();
      setStats(data);
    } catch (err) {
      console.error("Erreur stats:", err);
    }
  };

  const addExpense = async (expenseData) => {
    try {
      const newExpense = await expenseApi.create(expenseData);
      setExpenses([newExpense, ...expenses]);
      fetchStats(); // Recharger les stats
    } catch (err) {
      setError("Erreur lors de l'ajout");
      console.error("Erreur:", err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await expenseApi.delete(id);
      setExpenses(expenses.filter((expense) => expense._id !== id));
      fetchStats(); // Recharger les stats
    } catch (err) {
      setError("Erreur lors de la suppression");
      console.error("Erreur:", err);
    }
  };

  return {
    expenses,
    stats,
    loading,
    error,
    addExpense,
    deleteExpense,
  };
};
