import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:2000/api/users/register", formData);

      if (response.data.success) {
        alert("Registration successful! Please log in.");
        navigate("/login"); // Redirect to login page after successful registration
      }
    } catch (error) {
      setError(error.response?.data?.msg || "Registration failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Register</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>

      <div style={styles.imageContainer}>
        <img
          src="https://png.pngtree.com/png-vector/20230429/ourlarge/pngtree-free-vector-login-concept-illustration-png-image_6743219.png"
          alt="Registration Illustration"
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
    padding: "50px",
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
  error: {
    color: "red",
    marginBottom: "15px",
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width:"50%",
  },
  image: {
    maxWidth: "60%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default Register;
