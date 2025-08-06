// Utility functions for formatting data
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getChangeText = (current, previous, type) => {
  if (!previous) return type === 'income' ? '+12% from last month' : '+8% from last month';
  const change = ((current - previous) / previous * 100).toFixed(0);
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change}% from last month`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
  });
};

export const getCategoryIcon = (category) => {
  const icons = {
    'food': '🍽️',
    'transport': '🚗',
    'entertainment': '🎬',
    'shopping': '🛍️',
    'utilities': '💡',
    'healthcare': '🏥',
    'education': '📚',
    'travel': '✈️',
    'groceries': '🛒',
    'restaurant': '🍽️',
    'gas': '⛽',
    'rent': '🏠',
    'insurance': '🛡️',
    'clothing': '👕',
    'fitness': '💪',
    'subscription': '📱',
    'other': '💳'
  };
  
  return icons[category.toLowerCase()] || icons['other'];
};