import "./Result.css";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import DiseaseDetails from "./DiseaseDetails";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { prediction, image } = location.state || {};

  if (!prediction) {
    return (
      <div className="result-page">
        <div className="result-card">
          <h2>No result data found. Please upload an image first.</h2>
          <button onClick={() => navigate("/upload")} className="details-btn" style={{marginTop: '20px'}}>Go to Upload</button>
        </div>
      </div>
    );
  }

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
            {prediction.predicted_class}
          </h2>

          <p className="score-label">
            Confidence Score
          </p>

          <h3 className="confidence-score">
            {(prediction.confidence * 100).toFixed(1)}%
          </h3>

          <p className="severity-label">
            Severity Level
          </p>

          <div className="severity-badge">
            {prediction.severity || "Unknown"}
          </div>

        </div>

        <h3 className="distribution-title">
          Probability Distribution
        </h3>

        <div className="probability-section">
          {prediction.probabilities?.map((item, index) => (
            <div key={index}>
              <div className="probability-item">
                <span>{item.class}</span>
                <span>{Math.round(item.prob * 100)}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${Math.round(item.prob * 100)}%`, backgroundColor: index === 0 ? '#ff4757' : '#ffa502' }}
                ></div>
              </div>
            </div>
          ))}
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