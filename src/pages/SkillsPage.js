import styles from "./SkillsPage.module.css";

import SkillsDescription from "../components/SkillsDescription";
import Skills from "../components/Skills";

function SkillsPage() {
  return (
    <div className={styles.desc}>
      <SkillsDescription />
      <Skills />
    </div>
  );
}

export default SkillsPage;
