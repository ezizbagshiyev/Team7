import express from "express";
import {
  addTransaction,
  getTransactions,
  removeTransaction,
  getFinancialSummary
} from "../../controllers/transactionController.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

// /api/transactions
router.post("/", protect, addTransaction);
router.get("/", protect, getTransactions);
router.get("/summary", protect, getFinancialSummary);
router.delete("/:transactionId", protect, removeTransaction);

export default router;
