import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import './Login.css';
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Password reset instructions sent to your email.");
    setEmail(""); 
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h1 className="forgot-password-heading">Forgot Password</h1>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-reset">Reset Password</button>
          </div>

          <div className="text-center mt-3">
            <p>Remembered your password? <Link to="/login" className="text-decoration-none">Login here</Link></p>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default ForgotPassword;
