export const getFinancialSummary = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate("transactions");
    if (!user) return res.status(404).json({ message: "User not found" });

    const totalIncome = user.transactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = user.transactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    // Group expenses by category
    const categoryTotals = {};
    user.transactions
      .filter(t => t.type === "expense")
      .forEach(t => {
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
      });

    // Convert to %
    const categoryPercentages = Object.fromEntries(
      Object.entries(categoryTotals).map(([cat, amt]) => [
        cat,
        ((amt / totalExpenses) * 100).toFixed(2) + "%"
      ])
    );

    // Overspending warning (over 50% in one category, example)
    const overspendingWarnings = Object.keys(categoryTotals).filter(
      cat => categoryTotals[cat] > totalExpenses * 0.5
    );

    res.json({
      totalIncome,
      totalExpenses,
      remainingBalance: totalIncome - totalExpenses,
      categoryPercentages,
      overspendingWarnings
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
