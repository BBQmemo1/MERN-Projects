const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/expense-tracker"
  )
  .then(() => console.log(" MongoDB connecté"))
  .catch((err) => console.log(" Erreur MongoDB:", err));

// Routes
const expensesRouter = require("./routes/expenses");
app.use("/api/expenses", expensesRouter);

app.get("/", (req, res) => {
  res.send("API Expense Tracker fonctionne !");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
