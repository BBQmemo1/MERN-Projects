import axios from "axios";

const API_URL = "http://localhost:5000/api/expenses";

export const expenseApi = {
  // recup toutes les depenses
  getAll: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // creer une dépense
  create: async (expenseData) => {
    const response = await axios.post(API_URL, expenseData);
    return response.data;
  },

  // Supp une dépense
  delete: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },

  // stats
  getStats: async () => {
    const response = await axios.get(`${API_URL}/stats`);
    return response.data;
  },
};
