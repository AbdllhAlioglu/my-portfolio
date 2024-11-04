import React from "react";
import Project from "./Project";
import { projectsData } from "../data";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <ul className={styles.projectsList}>
        {projectsData.map((project) => (
          <li key={project.name} className={styles.projectItem}>
            <Project projectObj={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
