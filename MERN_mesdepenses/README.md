# MesDépenses

Application MERN pour gérer vos dépenses.

## Installation rapide

### Backend

```bash
cd backend
npm install
```

Créer `backend/.env` :

```env
MONGODB_URI=mongodb://localhost:27017/expense-tracker
PORT=5000
```

### Frontend

```bash
cd frontend
npm install
```

## Démarrage

**Terminal 1 - Backend :**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend :**

```bash
cd frontend
npm run dev
```

Ouvrir **http://localhost:5173**

## Stack

- MongoDB + Express + React + Node.js
- Tailwind CSS
- Vite

## Fonctionnalités

- Ajouter des dépenses
- Supprimer des dépenses
- Statistiques
- Mode sombre
- Filtres par catégorie
