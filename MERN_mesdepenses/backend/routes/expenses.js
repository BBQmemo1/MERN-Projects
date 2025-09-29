const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

router.get("/", expenseController.getAllExpenses);
router.post("/", expenseController.createExpense);
router.delete("/:id", expenseController.deleteExpense);
router.get("/stats", expenseController.getStats);

module.exports = router;
