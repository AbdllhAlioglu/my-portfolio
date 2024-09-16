import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import Footer from "./components/Footer";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import CertificatesPage from "./pages/CertificatesPage";
import WarningModal from "./components/WarningModal"; // Uyarı modalını ekledik

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <WarningModal /> {/* Uyarı modalını göster */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
