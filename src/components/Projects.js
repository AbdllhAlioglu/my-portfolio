import React from "react";
import Project from "./Project";
import { projectsData } from "../data";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <ul className={styles.projectsList}>
        {projectsData.map((project) => (
          <li className={styles.projectItem}>
            <Project key={project.name} projectObj={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
