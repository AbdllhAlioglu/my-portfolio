import styles from "./Project.module.css";
import Button from "./Button";
function Project({ projectObj }) {
  return (
    <div className={styles.project}>
      <div>
        <img src={projectObj.photoName} alt={projectObj.name} />
      </div>
      <div>
        <h3>{projectObj.name}</h3>
        <p>{projectObj.description}</p>
      </div>
      <div className={styles.btn}>
        <Button>View project</Button>
        <Button>View Source</Button>
      </div>
    </div>
  );
}

export default Project;
