import styles from "./ProjectDescription.module.css";

function ProjectDescription() {
  return (
    <div className={styles.desc}>
      <h2>My Project</h2>
      <p>
        Check out some of the projects I've worked on. Each project showcases my
        skills in different areas of web development.
      </p>
    </div>
  );
}

export default ProjectDescription;
