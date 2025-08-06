const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  userId: { type: String},
  amount: { type: Number, required: true },
  source: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Income', incomeSchema);
