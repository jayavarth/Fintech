import React from "react";
import Sidebar from "./Sidebar";

const ProfilePage = () => {
  // Dummy user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    income: 50000,
    savings: 10000,
    riskLevel: "Medium",
  };

  return (
    <div>
      <Sidebar />
      <div style={styles.profileBox}>
        <h2 style={styles.heading}>User Profile</h2>
        <div style={styles.profileDetails}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Income:</strong> ${user.income}</p>
          <p><strong>Savings:</strong> ${user.savings}</p>
          <p><strong>Risk Level:</strong> {user.riskLevel}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heading: {
    marginBottom: "15px",
    color: "white",
  },
  profileDetails: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "white",
    textAlign: "left",
  },
};

export default ProfilePage;
