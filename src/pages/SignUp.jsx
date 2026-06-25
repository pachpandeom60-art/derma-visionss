import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdPerson } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  return (
    <div className="signup-page">
      <div className="signup-card">

        <h1 className="signup-title">Create Account</h1>

        <p className="signup-subtitle">
          Join DermaVision today
        </p>

        <div className="input-box">
          <MdPerson className="input-icon" />
          <input
  type="text"
  placeholder="Full Name"
  className="signup-input"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
        </div>

        <div className="input-box">
          <MdEmail className="input-icon" />
          <input
            type="email"
            placeholder="Email Address"
            className="signup-input"
          />
        </div>

        <div className="input-box">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
          />
        </div>

        <div className="input-box">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="signup-input"
          />
        </div>

        <button
          className="signup-btn"
          onClick={() => {
  localStorage.setItem("userName", name);
  navigate("/home");
}}
        >
          Create Account
        </button>

        <div className="divider">
          <span></span>
          <p>or continue with</p>
          <span></span>
        </div>

        <div className="social-container">
          <button className="social-btn">
            <FcGoogle size={28} />
          </button>

          <button className="social-btn">
            <FaFacebook size={28} color="#1877F2" />
          </button>
        </div>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default SignUp;