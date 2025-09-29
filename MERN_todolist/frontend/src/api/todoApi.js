import axios from "axios";
const API_URL = "http://localhost:5000/api/todos";

export const todoApi = {
  // recup toutes les taches
  getAll: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // creer une tache
  create: async (title) => {
    const response = await axios.post(API_URL, { title });
    return response.data;
  },

  // modif une tache
  update: async (id, data) => {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  },

  // supp une tache
  delete: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },
};
