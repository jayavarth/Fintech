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
      category: formData.category,
      amount: formData.amount,
      date: formData.date,
    };

    const token = localStorage.getItem("token");

    if (!token) {
      alert("No token found. Please log in again.");
      return;
    }

    try {
      await axios.post("http://localhost:2000/api/expenses/add", expenseData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Add Expense</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category</label>
            <select name="category" value={formData.category} onChange={handleChange} style={styles.select}>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Amount</label>
            <input type="number" name="amount" placeholder="Enter amount" value={formData.amount} onChange={handleChange} style={styles.input} required />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} style={styles.input} required />
          </div>

          <button type="submit" style={styles.button}>Add Expense</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
  },
  formContainer: {
    flex: 2,
    maxWidth: "400px",
    marginLeft: "500px",
    padding: "20px",
    borderRadius: "8px",
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
  formGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  label: {
    width: "100px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  select: {
    flex: 1,
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "rgb(25,31,52)",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

export default AddExpense;
