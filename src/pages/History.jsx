import "./History.css";
import { useNavigate } from "react-router-dom";

import benignKeratosis from "../assets/benign-keratosis.jpeg";
import melanoma from "../assets/melanoma.jpeg";
import moles from "../assets/moles.jpeg";

import {
  FiArrowLeft,
  FiFilter,
  FiHome,
  FiClock,
  FiCamera,
  FiInfo,
  FiUser,
} from "react-icons/fi";

function History() {
  const navigate = useNavigate();

  const historyData = [
    {
      disease: "Benign Keratosis",
      date: "24 Jun 2026",
      confidence: "96%",
      image: benignKeratosis,
    },
    {
      disease: "Melanoma",
      date: "22 Jun 2026",
      confidence: "89%",
      image: melanoma,
    },
    {
      disease: "Moles",
      date: "20 Jun 2026",
      confidence: "98%",
      image: moles,
    },
    {
      disease: "Benign Keratosis",
      date: "18 Jun 2026",
      confidence: "94%",
      image: benignKeratosis,
    },
    {
      disease: "Melanoma",
      date: "15 Jun 2026",
      confidence: "91%",
      image: melanoma,
    },
  ];

  return (
    <div className="history-page">
      <div className="history-card">

        <div className="history-header">
          <FiArrowLeft
            className="top-icon"
            onClick={() => navigate("/home")}
          />

          <h1>History</h1>

          <FiFilter className="top-icon" />
        </div>

        <div className="history-list">
          {historyData.map((item, index) => (
            <div className="history-item" key={index}>

              <img
                src={item.image}
                alt={item.disease}
                className="history-image"
              />

              <div className="history-info">
                <h4>{item.disease}</h4>
                <p>{item.date}</p>
              </div>

              <div className="history-score">
                {item.confidence}
              </div>

            </div>
          ))}
        </div>

        <div className="bottom-nav">

          <div
            className="nav-item"
            onClick={() => navigate("/home")}
          >
            <FiHome />
            <span>Home</span>
          </div>

          <div className="nav-item active">
            <FiClock />
            <span>History</span>
          </div>

          <div
            className="camera-btn"
            onClick={() => navigate("/upload")}
          >
            <FiCamera />
          </div>

          <div
            className="nav-item"
            onClick={() => navigate("/tips")}
          >
            <FiInfo />
            <span>Info</span>
          </div>

          <div
            className="nav-item"
            onClick={() => navigate("/profile")}
          >
            <FiUser />
            <span>Profile</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default History;