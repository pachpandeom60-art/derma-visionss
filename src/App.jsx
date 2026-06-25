import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import DiseaseDetails from "./pages/DiseaseDetails";
import History from "./pages/History";
import Tips from "./pages/Tips";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/result" element={<Result />} />
      <Route path="/details" element={<DiseaseDetails />} />
      <Route path="/history" element={<History />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;