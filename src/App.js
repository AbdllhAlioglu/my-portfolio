import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import Footer from "./components/Footer";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
