const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  userId: { type: String},
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  comment: { type: String },
});

module.exports = mongoose.model('Expense', expenseSchema);