import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! Please log in.");
        setFormData({  userName: "", email: "", password: "" });
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
       

        <div style={styles.inputContainer}>
          <label style={styles.label}>Username:</label>
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} style={styles.input} required />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} required />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={styles.input} required />
        </div>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    marginLeft: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#333",
  },
  heading: {
    textAlign: "center",
    color: "white",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  label: {
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    minWidth: "100px", 
  },
  input: {
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
    backgroundColor: "black",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

export default Register;