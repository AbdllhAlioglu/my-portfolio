import ProjectDescription from "./ProjectDescription";
import styles from "./ProjectPage.module.css";
import Projects from "./Projects";

function ProjectPage() {
  return (
    <div className={styles.desc}>
      <ProjectDescription />
      <Projects />
    </div>
  );
}

export default ProjectPage;
