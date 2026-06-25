import "./Home.css";
import { useNavigate } from "react-router-dom";
import benignKeratosis from "../assets/benign-keratosis.jpeg";
import melanoma from "../assets/melanoma.jpeg";
import moles from "../assets/moles.jpeg";
import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";

import {
  FiBell,
  FiUser,
  FiUpload,
  FiHome,
  FiClock,
  FiCamera,
  FiInfo,
} from "react-icons/fi";

function Home() {
  const [darkMode, setDarkMode] = useState(
  localStorage.getItem("darkMode") === "true"
);
const toggleDarkMode = () => {

  const newMode = !darkMode;

  setDarkMode(newMode);

  localStorage.setItem(
    "darkMode",
    newMode
  );

  document.body.classList.toggle(
    "dark-mode",
    newMode
  );
};
useEffect(() => {

  if (
    localStorage.getItem("darkMode") === "true"
  ) {
    document.body.classList.add(
      "dark-mode"
    );
  }

}, []);
  const [showNotifications, setShowNotifications] =
  useState(false);
  const [userName, setUserName] = useState("User");

useEffect(() => {
  const savedName = localStorage.getItem("userName");

  if (savedName) {
    setUserName(savedName.split(" ")[0]);
  }
}, []);
  const navigate = useNavigate();
  const analyses = [
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
  ];

  return (
    <div className="home-page">
      <div className="home-card">

        {/* Header */}
        <div className="home-header">
          <div>
            <h1>Hello, {userName}! 👋</h1>
            <p>Take Care of your skin</p>
          </div>

          <div className="header-icons">

  <FiBell
    onClick={() =>
      setShowNotifications(true)
    }
  />

  <FiMoon
    className="moon-icon"
    onClick={toggleDarkMode}
  />
            <FiUser onClick={() => navigate("/profile")} />
          </div>
        </div>

        {/* Analyze Card */}
        <div className="analyze-card">

          <div className="analyze-left">
            <h2>Analyze Your Skin</h2>

            <p>
              Upload or capture a skin image
              to detect possible skin conditions
            </p>

            <button
  className="analysis-btn"
  onClick={() => navigate("/upload")}
>
  Start Analysis
</button>
          </div>

          <div className="upload-box">
            <FiUpload />
          </div>

        </div>

        {/* Recent Analysis */}
        <div className="recent-header">
          <h3>Recent Analyses</h3>
          <span>View All</span>
        </div>

        {analyses.map((item, index) => (
          <div className="analysis-item" key={index}>

            <img
              src={item.image}
              alt={item.disease}
              className="analysis-image"
            />

            <div className="analysis-info">
              <h4>{item.disease}</h4>
              <p>{item.date}</p>
            </div>

            <div className="confidence">
              {item.confidence}
            </div>

          </div>
        ))}

{showNotifications && (

  <div
    className="notification-overlay"
    onClick={() =>
      setShowNotifications(false)
    }
  >

    <div
      className="notification-modal"
      onClick={(e) =>
        e.stopPropagation()
      }
    >

      <h2>Notifications</h2>

      <div className="notification-item">
        ✅ Analysis completed successfully
      </div>

      <div className="notification-item">
        💾 Skin report saved
      </div>

      <div className="notification-item">
        👋 Welcome to DermaVision
      </div>

      <button
        className="close-notification"
        onClick={() =>
          setShowNotifications(false)
        }
      >
        Close
      </button>

    </div>

  </div>

)}

        {/* Bottom Navigation */}
        <div className="bottom-nav">

          <div className="nav-item active">
            <FiHome />
            <span>Home</span>
          </div>

          <div
  className="nav-item"
  onClick={() => navigate("/history")}
>
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

          <div className="nav-item">
            <FiUser onClick={() => navigate("/profile")} />
            <span>Profile</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;