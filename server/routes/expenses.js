const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Expense = require('../models/Expense');
const Income = require('../models/Income');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', async (req, res) => {
  const { amount, category, date, comment } = req.body;
  try {
    const userId = 'temp_user_123'; //hardcoded user
    const expense = new Expense({
      userId,
      amount,
      category,
      date,
      comment,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    console.error("Create expense error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/summary', async (req, res) => {
  try {
    const userId = 'temp_user_123'; //hardcoded user
    const expenses = await Expense.find({ userId });

    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    const incomes = await Income.find({ userId });
    const totalIncome = incomes.reduce((sum, inc) => sum + inc.amount, 0);

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

router.get('/dashboard', async (req, res) => {
  try {
    const userId = 'temp_user_123'; //hardcoded user

    const expenses = await Expense.find({ userId }).sort({ date: -1 });
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    const incomes = await Income.find({ userId });
    const totalIncome = incomes.reduce((sum, inc) => sum + inc.amount, 0);

    const remainingBalance = totalIncome - totalExpenses;

    // Category breakdown
    const categoryTotals = expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});

    const categoryBreakdown = Object.entries(categoryTotals).reduce((acc, [cat, amount]) => {
      acc[cat] = {
        amount,
        percentage: totalExpenses > 0 ? Math.round((amount / totalExpenses) * 100) : 0
      };
      return acc;
    }, {});

    res.status(200).json({
      summary: {
        totalIncome,
        totalExpenses,
        remainingBalance,
        budgetProgress: totalIncome > 0 ? Math.round((remainingBalance / totalIncome) * 100) : 0
      },
      recentTransactions: expenses.slice(0, 5),
      categoryBreakdown,
      monthlyTrend: [
        { month: "Jun", income: 5400, expenses: 2800 },
        { month: "Jul", income: totalIncome, expenses: totalExpenses }
      ]
    });

  } catch (err) {
    console.error("Dashboard error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;