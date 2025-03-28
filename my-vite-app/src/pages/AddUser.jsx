import { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

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
      await axios.post("http://localhost:5000/api/add-user", formData);
      alert("User added successfully!");
      setFormData({ name: "", email: "", income: "", savings: "", riskLevel: "Medium" });
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user.");
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Add User</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="income" style={styles.label}>Income:</label>
            <input type="number" id="income" name="income" placeholder="Enter income" value={formData.income} onChange={handleChange} style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="savings" style={styles.label}>Savings:</label>
            <input type="number" id="savings" name="savings" placeholder="Enter savings" value={formData.savings} onChange={handleChange} style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="riskLevel" style={styles.label}>Risk Level:</label>
            <select id="riskLevel" name="riskLevel" value={formData.riskLevel} onChange={handleChange} style={styles.select}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button type="submit" style={styles.button}>Add User</button>
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
  inputGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  label: {
    width: "100px",
    fontWeight: "bold",
    fontSize: "14px",
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
    color: "black",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

export default AddUser;
