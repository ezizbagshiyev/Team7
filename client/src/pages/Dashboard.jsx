import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [newTxn, setNewTxn] = useState({
    type: "expense",
    amount: "",
    category: "",
    date: "",
    comment: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProfile();
    fetchTransactions();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/users/profile", { credentials: "include" });
      const data = await res.json();
      if (res.ok) setProfile(data);
      else setMessage(data.message || "Failed to load profile");
    } catch {
      setMessage("Server error");
    }
  };

  const fetchTransactions = async () => {
    try {
      const res = await fetch("/api/transactions", { credentials: "include" });
      const data = await res.json();
      if (res.ok) setTransactions(data.data || []);
      else setMessage(data.message || "Failed to load transactions");
    } catch {
      setMessage("Server error");
    }
  };

  const handleChange = (e) =>
    setNewTxn({ ...newTxn, [e.target.name]: e.target.value });

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newTxn),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Transaction added");
        setNewTxn({ type: "expense", amount: "", category: "", date: "", comment: "" });
        fetchTransactions();
      } else {
        setMessage(data.message || "Failed to add transaction");
      }
    } catch {
      setMessage("Server error");
    }
  };

  if (!profile) return <p>{message || "Loading..."}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Dashboard</h2>
      <p>
        <strong>User:</strong> {profile.username} (<em>{profile.email}</em>)
      </p>

      <h3>Add Transaction</h3>
      <form onSubmit={handleAddTransaction}>
        <select
          name="type"
          value={newTxn.type}
          onChange={handleChange}
          required
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <br />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newTxn.amount}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
        <br />
        <input
          name="category"
          placeholder="Category"
          value={newTxn.category}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="date"
          name="date"
          value={newTxn.date}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="comment"
          placeholder="Comment (optional)"
          value={newTxn.comment}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add</button>
      </form>

      <h3>Transactions</h3>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t._id}>
              [{t.type.toUpperCase()}] ${t.amount} - {t.category} on{" "}
              {new Date(t.date).toLocaleDateString()} {t.comment && `(${t.comment})`}
            </li>
          ))}
        </ul>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
