import React from "react";
import "./Login.css";
import { pics } from "../../Constants/pics";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-section">
          <img
            className="login-pic"
            src={pics.study}
            alt="Login illustration"
          />
        </div>
        <div className="right-section">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="login-input"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="login-input"
              required
            />

            <a href="#" className="forgot-password">
              Forgot Password?
            </a>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="register-text">
            Don't have an account?{" "}
            <a href="/Register" className="register-link">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
