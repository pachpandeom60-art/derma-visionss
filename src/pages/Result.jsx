import "./Result.css";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import DiseaseDetails from "./DiseaseDetails";

function Result() {
  const navigate = useNavigate();

  return (
    <div className="result-page">
      <div className="result-card">

        <FiArrowLeft
          className="back-icon"
          onClick={() => navigate("/upload")}
        />

        <h1 className="result-title">
          Result Analysis
        </h1>

        <div className="prediction-card">

          <p className="prediction-label">
            Predicted Condition
          </p>

          <h2 className="disease-name">
            Melanoma
          </h2>

          <p className="score-label">
            Confidence Score
          </p>

          <h3 className="confidence-score">
            89.4%
          </h3>

          <p className="severity-label">
            Severity Level
          </p>

          <div className="severity-badge">
            High
          </div>

        </div>

        <h3 className="distribution-title">
          Probability Distribution
        </h3>

        <div className="probability-section">

          <div className="probability-item">
            <span>Melanoma</span>
            <span>89%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill melanoma"
            ></div>
          </div>

          <div className="probability-item">
            <span>Moles</span>
            <span>7%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill moles"
            ></div>
          </div>

          <div className="probability-item">
            <span>Benign Keratosis</span>
            <span>4%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill keratosis"
            ></div>
          </div>

        </div>

        <div className="result-buttons">

          <button
            className="details-btn"
            onClick={() => navigate("/details")}
          >
            View Details
          </button>

          <button className="save-btn">
            Save Result
          </button>

        </div>

      </div>
    </div>
  );
}

export default Result;