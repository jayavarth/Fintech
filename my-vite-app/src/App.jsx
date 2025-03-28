import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AddExpense from "./pages/AddExpense";
import InvestIdeas from "./pages/InvestIdeas";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", paddingRight: "100px" }}>
        <h1>Financial Budgeting & Investment Tool</h1>
        <Routes>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/invest-ideas" element={<InvestIdeas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;