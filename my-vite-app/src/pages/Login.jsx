import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    let apiUrl = `https://face-regconition-backend.onrender.com/api/${role}/login`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.msg || "Login failed!");

      localStorage.setItem("token", data.token);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleLogin} style={styles.form}>
  <div style={styles.inputContainer}>
    <label style={styles.label}>Email:</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
  </div>

  <div style={styles.inputContainer}>
    <label style={styles.label}>Password:</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
  </div>

  <div style={styles.inputContainer}>
    <label style={styles.label}>Role:</label>
    <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.input} required>
      <option value="employee">Employee</option>
      <option value="admin">Admin</option>
    </select>
  </div>

  <button type="submit" style={styles.button} disabled={loading}>
    {loading ? "Logging in..." : "Login"}
  </button>
</form>


      <p style={styles.link}>
        <a href="/forgot" style={{ color: "#ddd", textDecoration: "none" }}>Forgot Password?</a>
      </p>
    </div>
  );
};

const styles = {
    form: {
      paddingLeft:"200px",
      display: "flex",
      flexDirection: "column",
      gap: "10px", // Adds spacing between fields
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    label: {
      color: "white",
      fontSize: "14px",
      fontWeight: "bold",
      width: "100px", // Ensures labels have equal width
    },
    input: {
      flex: "1", // Makes all inputs take the same width
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
  };
  

export default Login;
