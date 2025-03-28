import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AddExpense from "./pages/AddExpense";
import InvestIdeas from "./pages/InvestIdeas";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", paddingRight: "190px" }}>
        <h1>Financial Budgeting & Investment Tool</h1>
        <nav>
          <Link to="/add-user">
            <button style={buttonStyle}>Add User Details</button>
          </Link>
          <Link to="/add-expense">
            <button style={buttonStyle}>Add Expense</button>
          </Link>
          <Link to="/invest-ideas">
            <button style={buttonStyle}>Invest Ideas</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/invest-ideas" element={<InvestIdeas />} />
        </Routes>
      </div>
    </Router>
  );
}

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default App;