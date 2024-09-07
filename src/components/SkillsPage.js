import styles from "./SkillsPage.module.css";

import SkillsDescription from "./SkillsDescription";
import Skills from "./Skills";

function SkillsPage() {
  return (
    <div className={styles.desc}>
      <SkillsDescription />
      <Skills />
    </div>
  );
}

export default SkillsPage;
