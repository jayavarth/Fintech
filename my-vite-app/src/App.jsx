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
        <header style={styles.navbar}>
          <h3>Financial Budgeting & Investment Tool</h3>
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

const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "97%",
      background: "rgb(21,35,52)",
      color: "#fff",
      padding: "6px 20px", // Reduced padding for a smaller height
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.1)",
      zIndex: 1,
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
