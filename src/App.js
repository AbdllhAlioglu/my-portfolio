import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/ProjectPage";
import SkillsPage from "./components/SkillsPage";
import Footer from "./components/Footer";
import "./App.css";
import ContactPage from "./components/ContactPage";

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
