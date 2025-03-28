import { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    income: "",
    job: "",
    age: "",
    riskLevel: "",
    target: "",
  });

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:2000/api/users", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("User added successfully!");
      setFormData({
        name: "",
        income: "",
        job: "",
        age: "",
        riskLevel: "Medium",
        target: "",
      });
    } catch (error) {
      console.error("Error adding user:", error.response?.data || error.message);
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
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="income" style={styles.label}>
              Income:
            </label>
            <input
              type="number"
              id="income"
              name="income"
              placeholder="Enter income"
              value={formData.income}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="job" style={styles.label}>
              Job:
            </label>
            <input
              type="text"
              id="job"
              name="job"
              placeholder="Enter job"
              value={formData.job}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="age" style={styles.label}>
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter age"
              value={formData.age}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="riskLevel" style={styles.label}>
              Risk Level:
            </label>
            <select
              id="riskLevel"
              name="riskLevel"
              value={formData.riskLevel}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="target" style={styles.label}>
              Target:
            </label>
            <input
              type="number"
              id="target"
              name="target"
              placeholder="Enter target"
              value={formData.target}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Add User
          </button>
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
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

export default AddUser;
