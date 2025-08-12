import React, { useState } from "react";

const LoginSignup = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const url = isLogin ? "/api/users/login" : "/api/users/signup";
      const payload = isLogin ? { email: form.email, password: form.password } : form;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || data.message || "Failed");
        return;
      }

      if (isLogin) {
        setIsAuthenticated(true);
        window.location.pathname = "/dashboard";
      } else {
        setMessage("Signup successful! Please login.");
        setIsLogin(true);
        setForm({ username: "", email: "", password: "" });
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <br />
          </>
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={() => { setIsLogin(!isLogin); setMessage(""); }}>
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
