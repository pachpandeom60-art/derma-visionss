import "./Tips.css";
import { useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiChevronRight,
  FiHome,
  FiClock,
  FiCamera,
  FiInfo,
  FiUser,
  FiDroplet,
} from "react-icons/fi";

function Tips() {
  const navigate = useNavigate();

  const tips = [
    {
      title: "Daily Skin Care Routine",
      content:
        "Cleanse twice daily, moisturize regularly, and wear SPF 30+ sunscreen every day.",
    },
    {
      title: "Common Skin Conditions",
      content:
        "Acne, Melanoma, Benign Keratosis, and Moles are among common skin conditions.",
    },
    {
      title: "Do's and Don'ts",
      content:
        "Do stay hydrated and protect your skin. Don't pick acne or skip sunscreen.",
    },
    {
      title: "Healthy Lifestyle Tips",
      content:
        "Eat nutritious food, sleep well, exercise regularly, and reduce stress levels.",
    },
    {
      title: "Myth vs Facts",
      content:
        "Myth: Oily skin doesn't need moisturizer. Fact: Every skin type needs hydration.",
    },
  ];

  return (
    <div className="tips-page">
      <div className="tips-card">

        <div className="tips-header">
          <FiArrowLeft
            className="top-icon"
            onClick={() => navigate("/home")}
          />

          <h1>Skin Care Tips</h1>

          <div></div>
        </div>

        <div className="hero-tip">
          <h2>🌿 Healthy Skin Starts With Daily Care</h2>

          <p>
            Small habits like cleansing, hydration,
            sunscreen and healthy nutrition can
            significantly improve skin health.
          </p>
        </div>

        <div className="daily-tip-card">
          <FiDroplet />

          <div>
            <h3>Today's Skin Care Tip</h3>
            <p>
              Drink at least 8 glasses of water
              daily to keep your skin hydrated.
            </p>
          </div>
        </div>

        <div className="tips-list">
          {tips.map((item, index) => (
            <div className="tip-item" key={index}>

              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>

              <FiChevronRight />

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

          <div className="nav-item active">
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

export default Tips;