import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Splash() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#EEF7EF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "380px",
          height: "780px",
          background: "#EEF7EF",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            background: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "contain",
            }}
          />
        </div>

        <h1
          style={{
            color: "#178A44",
            fontSize: "48px",
            marginTop: "40px",
            fontWeight: "700",
          }}
        >
          DermaVision
        </h1>

        <p
          style={{
            color: "#7180A0",
            fontSize: "24px",
            marginTop: "10px",
          }}
        >
          Know Your Skin Better
        </p>

        <button
          style={{
  marginTop: "90px",
  background: "#20B04B",
  color: "#fff",
  border: "none",
  padding: "16px 42px",
  borderRadius: "14px",
  fontSize: "20px",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(32,176,75,0.35)",
  transition: "0.3s",
}}
        
          onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-3px)";
  }}

  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0)";
  }}
 className="get-started-btn"
  onClick={() => navigate("/login")}
>
  Get Started
        </button>
      </div>
    </div>
  );
}

export default Splash;