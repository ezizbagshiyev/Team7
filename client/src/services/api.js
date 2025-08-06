const API_BASE = 'http://localhost:5000/api';

export const api = {
  // Auth
  login: async (credentials) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Login failed');
    }
    const data = await res.json();
    localStorage.setItem('token', data.token);
    return res.json();
  },

  // Get dashboard data in one call (requires auth)
  getDashboard: async () => {
    // const token = localStorage.getItem('token');
    // if (!token) throw new Error('No auth token found');
    const res = await fetch(`${API_BASE}/expenses/dashboard`);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch dashboard data');
    }
    return res.json();
  },

  // Add expense (requires auth)
  addExpense: async (expense) => {
    // const token = localStorage.getItem('token');
    // if (!token) throw new Error('No auth token found');
    const res = await fetch(`${API_BASE}/expenses`, {
      method: 'POST',
      body: JSON.stringify(expense),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to add expense');
    }
    return res.json();
  }
};

export default api;
