import "./Upload.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiUploadCloud } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { FiImage } from "react-icons/fi";

function Upload() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    try {
      const response = await fetchfetch("https://derma-visionss.onrender.com/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setLoading(false);
      if (data.error) {
        alert(data.error);
        return;
      }
      navigate("/result", { state: { prediction: data, image: URL.createObjectURL(file) } });
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
      setLoading(false);
    }
  };

  return (
    <div className="upload-page">

      <div className="upload-container">

        <div className="upload-header">
          <FiArrowLeft
            className="back-icon"
            onClick={() => navigate("/home")}
          />

          <div>
            <h1>Upload Image</h1>
            <p>Select or capture a clear image</p>
          </div>
        </div>

        <div className="upload-card">

          <FiUploadCloud className="cloud-icon" />

          <h2>Drag and Drop</h2>

          <span>OR</span>

          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button
            className="choose-btn"
            onClick={() => fileInputRef.current?.click()}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Choose Image"}
          </button>

        </div>

        <div className="capture-section">

          <p className="capture-title">
            or capture from
          </p>

          <div className="capture-buttons">

            <button className="capture-btn">
              <FiCamera />
              <span>Camera</span>
            </button>

            <button className="capture-btn" onClick={() => fileInputRef.current?.click()}>
              <FiImage />
              <span>Gallery</span>
            </button>

          </div>

        </div>

        <div className="upload-info">
          <p>Supported formats: JPG, PNG, JPEG</p>
          <p>Max size: 10MB</p>
        </div>

      </div>

    </div>
  );
}

export default Upload;