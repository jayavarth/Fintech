import { useState } from "react";

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
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="number" name="income" placeholder="Income" value={formData.income} onChange={handleChange} required />
        <input type="number" name="savings" placeholder="Savings" value={formData.savings} onChange={handleChange} />
        <select name="riskLevel" value={formData.riskLevel} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;