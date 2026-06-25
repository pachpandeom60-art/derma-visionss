import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FiArrowLeft,
  FiUser,
  FiFileText,
  FiBell,
  FiShield,
  FiBookOpen,
  FiLogOut,
  FiChevronRight,
  FiHome,
  FiClock,
  FiCamera,
  FiInfo,
} from "react-icons/fi";

function Profile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const handleProfileImage = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const imageUrl = URL.createObjectURL(file);

  setProfileImage(imageUrl);
};
  const [showModal, setShowModal] = useState(false);

const [name, setName] = useState("User");
const [email, setEmail] = useState("user@example.com");

const [tempName, setTempName] = useState("");
const [tempEmail, setTempEmail] = useState("");

useEffect(() => {
  const savedName =
    localStorage.getItem("userName");

  const savedEmail =
    localStorage.getItem("userEmail");

  if (savedName) {
    setName(savedName);
    setTempName(savedName);
  }

  if (savedEmail) {
    setEmail(savedEmail);
    setTempEmail(savedEmail);
  }
}, []);

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <FiArrowLeft
            className="top-icon"
            onClick={() => navigate("/home")}
          />
        </div>

        <div className="user-card">

          <label className="avatar">

  {profileImage ? (
    <img
      src={profileImage}
      alt="Profile"
      className="avatar-image"
    />
  ) : (
    <FiUser />
  )}

  <input
    type="file"
    accept="image/*"
    hidden
    onChange={handleProfileImage}
  />

</label>

          <div className="user-details">
           <h2>{name}</h2>
<p>{email}</p>

<button
  className="edit-btn"
  onClick={() => setShowModal(true)}
>
  Edit Profile
</button>
          </div>

        </div>

        <div className="settings-list">

          <div className="setting-item">
            <FiFileText />
            <span>Scans Performed</span>
            <small>24</small>
            <FiChevronRight />
          </div>

          <div className="setting-item">
            <FiBookOpen />
            <span>Saved Results</span>
            <small>12</small>
            <FiChevronRight />
          </div>

          <div className="setting-item">
            <FiBell />
            <span>Reminders</span>
            <small>ON</small>
            <FiChevronRight />
          </div>



          <div
  className="setting-item"
  onClick={() => navigate("/about")}
>
  <FiShield />
  <span>Privacy Policy</span>
  <FiChevronRight />
</div>

<div
  className="setting-item"
  onClick={() => navigate("/about")}
>
  <FiBookOpen />
  <span>Terms and Conditions</span>
  <FiChevronRight />
</div>

        </div>

        <button
  className="logout-btn"
  onClick={() => navigate("/")}
>
  <FiLogOut />
  Logout
</button>


{showModal && (
  <div className="modal-overlay">

    <div className="edit-modal">

      <h2>Edit Profile</h2>

      <input
        type="text"
        value={tempName}
        onChange={(e) =>
          setTempName(e.target.value)
        }
        placeholder="Name"
      />

      <input
        type="email"
        value={tempEmail}
        onChange={(e) =>
          setTempEmail(e.target.value)
        }
        placeholder="Email"
      />

      <div className="modal-buttons">

        <button
          className="cancel-btn"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>

        <button
          className="save-btn"
          onClick={() => {
            setName(tempName);
            setEmail(tempEmail);

            localStorage.setItem(
              "userName",
              tempName
            );

            localStorage.setItem(
              "userEmail",
              tempEmail
            );

            setShowModal(false);
          }}
        >
          Save
        </button>

      </div>

    </div>

  </div>
)}

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

          <div
            className="nav-item"
            onClick={() => navigate("/tips")}
          >
            <FiInfo />
            <span>Info</span>
          </div>

          <div className="nav-item active">
            <FiUser />
            <span>Profile</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;