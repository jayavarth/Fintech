import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AddExpense from "./pages/AddExpense";
import InvestIdeas from "./pages/InvestIdeas";
import ProfilePage from "./pages/Profilepage";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <div>
        {/* Fixed Navigation Bar */}
        <header style={styles.navbar}>
          <h2>Financial Budgeting & Investment Tool</h2>
          <div>
            <Link to="/register" style={styles.link}>Register</Link>
            <Link to="/login" style={styles.link}>Login</Link>
          </div>
        </header>

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/invest-ideas" element={<InvestIdeas />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
      </div>
    </Router>
  );
}

// CSS styles in JavaScript
const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "97%",
    background: "#333",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  link: {
    marginLeft: "15px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  mainContent: {
    paddingTop: "60px", 
    textAlign: "center",
  },
};

export default App;
