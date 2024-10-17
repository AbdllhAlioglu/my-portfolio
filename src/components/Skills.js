import React from "react";
import Skill from "./Skill";
import { skillsData } from "../data";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <ul className={styles.skillsList}>
        {skillsData.map((skill) => (
          <li key={skill.name} className={styles.skillItem}>
            <Skill skillObj={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
