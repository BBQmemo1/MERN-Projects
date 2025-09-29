// Formater le montant en euros
export const formatAmount = (amount) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

// formate la date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// cat disponibles
export const CATEGORIES = [
  "Alimentation",
  "Transport",
  "Logement",
  "Loisirs",
  "Santé",
  "Autre",
];

// Couleurs cat
export const CATEGORY_COLORS = {
  Alimentation: "#10b981",
  Transport: "#3b82f6",
  Logement: "#8b5cf6",
  Loisirs: "#f59e0b",
  Santé: "#ef4444",
  Autre: "#6b7280",
};
