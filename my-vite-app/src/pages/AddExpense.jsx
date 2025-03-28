import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const AddExpense = () => {
  const categories = ["food", "groceries", "travel", "utilities", "entertainment", "rent"];

  const [formData, setFormData] = useState({
    category: categories[0], 
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expenseData = {
      ...formData,
      userId: "USER_ID_PLACEHOLDER", 
    };

    try {
      const res = await axios.post("http://localhost:5000/api/expenses/add", expenseData);
      alert("Expense added successfully!");
      setFormData({ category: categories[0], amount: "", date: "" });
    } catch (error) {
      console.error("Error adding expense:", error);
      alert("Failed to add expense.");
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <h2 style={styles.heading}>Add Expense</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <select name="category" value={formData.category} onChange={handleChange} style={styles.select}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
        
        <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} style={styles.input} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} style={styles.input} required />
        
        <button type="submit" style={styles.button}>Add Expense</button>
      </form>
    </div>
  );
};

const styles = {
    container: {
      display: "flex", // Ensures Sidebar and form are side by side
      justifyContent: "flex-start", 
      alignItems: "center",
      height: "100vh", // Makes sure the form is positioned properly
      padding: "20px",
    },
    formContainer: {
      flex: 2, // Takes remaining space after sidebar
      maxWidth: "400px",
      marginLeft: "600px", // Adjust based on Sidebar width
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      textAlign: "center",
      color: "black",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      padding: "8px",
      marginBottom: "15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    select: {
      padding: "8px",
      marginBottom: "15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    button: {
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "grey",
      color: "black",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  };

export default AddExpense;