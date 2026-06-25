import "./Login.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="login-card">

        <h1 className="login-title">Welcome Back!</h1>

        <p className="login-subtitle">
          Login to continue
        </p>

        <div className="input-box">
  <MdEmail className="input-icon" />

  <input
  type="email"
  placeholder="Email Address"
  className="login-input"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
</div>

        <div className="input-box">
  <FaLock className="input-icon" />

  <input
    type="password"
    placeholder="Password"
    className="login-input"
  />

  <FaEyeSlash className="eye-icon" />
</div>

        <div className="forgot-container">
          <a href="#">Forgot Password?</a>
        </div>

        <button
  className="login-btn"
  onClick={() => {

    const userName =
      email.split("@")[0];

    localStorage.setItem(
      "userName",
      userName
    );

    navigate("/home");
  }}
>
  Login
</button>

        <div className="divider">
          <span></span>
          <p>or continue with</p>
          <span></span>
        </div>

        <div className="social-container">
  <button className="social-btn">
    <FcGoogle size={36} />
  </button>

  <button className="social-btn">
    <FaFacebook size={34} color="#1877F2" />
  </button>
</div>
        
        <p className="signup-text">
  Don't have an account?{" "}
  <Link to="/signup" className="signup-link">
    Sign Up
  </Link>
</p>

      </div>
    </div>
  );
}

export default Login;