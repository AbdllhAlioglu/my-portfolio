import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import Footer from "./components/Footer";
import "./App.css";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProjectPage />
      <SkillsPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
