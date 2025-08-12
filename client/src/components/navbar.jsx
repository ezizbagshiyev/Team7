import React from "react";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = async () => {
    try {
      await fetch("/api/users/logout", { method: "POST", credentials: "include" });
      setIsAuthenticated(false);
      window.location.pathname = "/";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav>
      <a href="/">Home</a> |{" "}
      {isAuthenticated ? (
        <>
          <a href="/dashboard">Dashboard</a> | <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <a href="/login">Login</a> | <a href="/signup">Signup</a>
        </>
      )}
    </nav>
  );
};

export default Navbar;
