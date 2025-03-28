import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://face-regconition-backend.onrender.com/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/profile");
    } catch (error) {
      setError(error.response?.data?.msg || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Form Container */}
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
          </div>


          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <div style={styles.imageContainer}>
  <img 
    src="https://png.pngtree.com/png-vector/20230429/ourlarge/pngtree-free-vector-login-concept-illustration-png-image_6743219.png" 
    alt="Login Illustration" 
    style={styles.image} 
  />
</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    padding: "20px",
    marginLeft:"100px",
  },
  formContainer: {
    flex: 1,
    maxWidth: "400px",
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
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "right",
    alignItems: "right",
    height: "70%",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default Login;
