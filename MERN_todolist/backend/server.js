const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const todosRouter = require("./routes/todos");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mern-todo")
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log("Erreur MongoDB:", err));

// routes
app.use("/api/todos", todosRouter);

app.get("/", (req, res) => {
  res.send("API fonctionne !");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
