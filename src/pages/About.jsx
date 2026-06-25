import "./About.css";
import { useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import logo from "../assets/logo.png";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="about-card">

        <button
  className="back-btn"
  onClick={() => navigate("/profile")}
>
  <FiArrowLeft />
</button>

        <h1 className="about-title">
          About DermaVision
        </h1>

        <div className="about-logo">
          <img src={logo} alt="logo" />
        </div>

        <h2 className="brand-name">
          DermaVision
        </h2>

        <p className="tagline">
          Know Your Skin Better
        </p>

        <p className="about-description">
          DermaVision is an AI-powered skin disease
          detection application that helps users
          identify possible skin conditions from
          images and promotes skin health awareness.
        </p>

        <div className="about-options">

          <div className="option-card">
            <span>How It Works</span>
            <FiChevronRight />
          </div>

          <div className="option-card">
            <span>Disclaimer</span>
            <FiChevronRight />
          </div>

          <div className="option-card">
            <span>Contact Us</span>
            <FiChevronRight />
          </div>

        </div>

        <p className="version">
          Version 1.0.0
        </p>

      </div>
    </div>
  );
}

export default About;