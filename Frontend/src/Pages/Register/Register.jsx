import React, { useState } from "react";
import "./Register.css";
import { pics } from "../../Constants/pics";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="Register-container">
      <div className="Register-box">
        <div className="Register-Left-side">
          <h2 className="Register-heading">Register</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="Register-email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="Register-input"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="name" className="Register-name">
              Student Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Student Name"
              className="Register-input"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password" className="Register-password">
              Create Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="Register-input"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="confirmPassword" className="Register-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="Register-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="Register-button">
              Register
            </button>
          </form>
          <p className="Register-para">
            Already have an account?{" "}
            <a className="Register-Login-link" href="/Login">
              Login
            </a>
          </p>
        </div>
        <div className="Register-Right-side">
          <img src={pics.reg} alt="pic" className="Register-pic" />
        </div>
      </div>
    </div>
  );
};

export default Register;
