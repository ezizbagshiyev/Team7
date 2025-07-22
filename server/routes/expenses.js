const express = require('express');
const jwt = require('jsonwebtoken');
const Expense = require('../models/Expense');
const router = express.Router();

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token, access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

router.post('/', auth, async (req, res) => {
  const { amount, category, date, comment } = req.body;
  try {
    const expense = new Expense({
      userId: req.user.userId,
      amount,
      category,
      date,
      comment,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/summary', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.userId });
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const totalIncome = 3000; // Hardcoded for MVP
    const remainingBalance = totalIncome - totalExpenses;

    const categorySpending = expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});

    res.json({
      totalIncome,
      totalExpenses,
      remainingBalance,
      categorySpending,
      expenses,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;