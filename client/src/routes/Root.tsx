import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./Root.css";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (darkMode) {
        body.classList.add("dark-mode");
      } else {
        body.classList.remove("dark-mode");
      }
    }
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <header>
        <button onClick={handleThemeToggle}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Link to="/signup">Sign up here</Link>
        <Link to="/login">Already have an account? Login here</Link>
      </header>
    </div>
  );
}

export default App;
