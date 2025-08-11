import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { checkAuth } from "./utils/auth";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {
  const path = window.location.pathname;
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const authStatus = await checkAuth();
      setIsAuthenticated(authStatus);
    };
    verifyAuth();
  }, []);

  if (isAuthenticated === null) return <LoadingIndicator/>;

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      {path === "/" && <Home />}
      {path === "/dashboard" && (isAuthenticated ? <Dashboard /> : <LoginSignup setIsAuthenticated={setIsAuthenticated} />)}
      {path === "/login" && <LoginSignup setIsAuthenticated={setIsAuthenticated} />}
    </>
  );
}

export default App;