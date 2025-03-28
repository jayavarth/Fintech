import { useState } from "react";
import Sidebar from "./Sidebar";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    income: "",
    savings: "",
    riskLevel: "Medium",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User added successfully!");
        setFormData({ name: "", email: "", income: "", savings: "", riskLevel: "Medium" });
      } else {
        alert(data.message || "Error adding user!");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <h2 style={styles.heading}>Add User</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={styles.input} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} required />
        <input type="number" name="income" placeholder="Income" value={formData.income} onChange={handleChange} style={styles.input} required />
        <input type="number" name="savings" placeholder="Savings" value={formData.savings} onChange={handleChange} style={styles.input} />
        
        <select name="riskLevel" value={formData.riskLevel} onChange={handleChange} style={styles.select}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit" style={styles.button}>Add User</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color:"black",
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

export default AddUser;
