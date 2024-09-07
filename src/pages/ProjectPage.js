import ProjectDescription from "../components/ProjectDescription";
import styles from "./ProjectPage.module.css";
import Projects from "../components/Projects";

function ProjectPage() {
  return (
    <div className={styles.desc}>
      <ProjectDescription />
      <Projects />
    </div>
  );
}

export default ProjectPage;
