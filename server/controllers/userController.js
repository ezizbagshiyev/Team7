import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import { generateToken } from "../auth/jwt.js";

// Signup
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    generateToken(res, user._id);
    res.json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Profile with totals
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate("transactions");
    if (!user) return res.status(404).json({ message: "User not found" });

    const totalIncome = user.transactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = user.transactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    res.json({
      username: user.username,
      email: user.email,
      totalIncome,
      totalExpenses,
      remainingBalance: totalIncome - totalExpenses,
      transactions: user.transactions
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Transaction
export const addTransaction = async (req, res) => {
  try {
    const { type, amount, category, date, comment } = req.body;
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const transaction = new Transaction({ type, amount, category, date, comment });
    await transaction.save();

    user.transactions.push(transaction._id);
    await user.save();

    res.status(201).json({ message: "Transaction added", transaction });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Transaction
export const removeTransaction = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const index = user.transactions.indexOf(req.params.transactionId);
    if (index === -1) return res.status(404).json({ message: "Transaction not found" });

    user.transactions.splice(index, 1);
    await user.save();

    await Transaction.findByIdAndDelete(req.params.transactionId);

    res.json({ message: "Transaction removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
