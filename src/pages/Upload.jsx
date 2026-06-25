import "./Upload.css";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FiUploadCloud } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { FiImage } from "react-icons/fi";

function Upload() {
  const navigate = useNavigate();
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

          <button
  className="choose-btn"
  onClick={() => navigate("/result")}
>
  Choose Image
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

            <button className="capture-btn">
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