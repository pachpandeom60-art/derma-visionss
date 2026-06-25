import "./DiseaseDetails.css";

import melanoma from "../assets/melanoma.jpeg";

import {
  FiArrowLeft,
  FiHeart,
  FiSun,
  FiAlertCircle,
  FiShield,
  FiDroplet,
  FiCheckCircle,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

function DiseaseDetails() {
  const navigate = useNavigate();

  return (
    <div className="details-page">
      <div className="details-card">

        {/* Top Bar */}
        <div className="details-top">
          <FiArrowLeft
            className="top-icon"
            onClick={() => navigate("/result")}
          />

          <FiHeart className="heart-icon" />
        </div>

        {/* Title */}
        <h1 className="disease-title">
          Melanoma
        </h1>

        {/* Badges */}
        <div className="badge-container">
          <span className="badge">Skin Cancer</span>
          <span className="badge danger">High Risk</span>
          <span className="badge success">89.4%</span>
        </div>

        {/* About Section */}
        <div className="about-section">

          <img
            src={melanoma}
            alt="Melanoma"
            className="disease-image"
          />

          <div className="about-content">
            <h3>About</h3>

            <p>
              Melanoma is a serious form of skin cancer
              that develops in the cells that produce melanin.
              Early detection significantly improves treatment
              success and survival rates.
            </p>
          </div>

        </div>

        {/* Symptoms */}
        <div className="info-grid">

  <div className="info-card">
    <h3>Symptoms</h3>

    <ul>
      <li>Irregular borders</li>
      <li>Dark pigmentation</li>
      <li>Changing size or shape</li>
      <li>Uneven color distribution</li>
    </ul>
  </div>

  <div className="info-card">
    <h3>Risk Factors</h3>

    <ul>
      <li>Excessive UV exposure</li>
      <li>Fair skin</li>
      <li>Family history of melanoma</li>
      <li>Frequent sunburns</li>
      <li>Large number of moles</li>
    </ul>
  </div>

        </div>

        {/* ABCDE Rule */}
        <div className="abcde-card">

          <h3>ABCDE Warning Signs</h3>

          <div className="abcde-grid">

            <div>A - Asymmetry</div>
            <div>B - Border irregularity</div>
            <div>C - Color variation</div>
            <div>D - Diameter &gt; 6mm</div>
            <div>E - Evolving over time</div>

          </div>

        </div>

        {/* Causes */}
        <div className="section">
          <h3>Possible Causes</h3>

          <div className="cause-icons">

            <div className="cause-box">
              <FiSun />
            </div>

            <div className="cause-box">
              <FiAlertCircle />
            </div>

            <div className="cause-box">
              <FiShield />
            </div>

            <div className="cause-box">
              <FiDroplet />
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="section">
          <h3>Recommended Actions</h3>

          <div className="action-grid">

            <div className="action-card">
              <FiCheckCircle />
              <span>Monitor Changes</span>
            </div>

            <div className="action-card">
              <FiCheckCircle />
              <span>Use SPF 30+</span>
            </div>

            <div className="action-card">
              <FiCheckCircle />
              <span>Skin Check</span>
            </div>

            <div className="action-card">
              <FiCheckCircle />
              <span>Avoid UV</span>
            </div>

          </div>
        </div>

        {/* Prevention */}
        <div className="section">
          <h3>Prevention Tips</h3>

          <ul>
            <li>Use sunscreen daily</li>
            <li>Avoid excessive sunlight</li>
            <li>Perform regular skin checks</li>
            <li>Consult a dermatologist regularly</li>
          </ul>
        </div>

        {/* Doctor Card */}
        <div className="doctor-card">

          <h3>When to see a Doctor?</h3>

          <p>
            If the mole changes size, shape, color,
            starts itching, bleeding or becomes painful,
            consult a dermatologist immediately.
          </p>

        </div>

      </div>
    </div>
  );
}

export default DiseaseDetails;