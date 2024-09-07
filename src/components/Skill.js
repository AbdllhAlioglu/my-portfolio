// Skill.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skill.module.css";

function Skill({ skillObj }) {
  return (
    <div className={styles.skill}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={skillObj.icon} className={styles.icon} />
      </div>
      <div>
        <h3>{skillObj.name}</h3>
        <p>{skillObj.description}</p>
      </div>
    </div>
  );
}

export default Skill;
