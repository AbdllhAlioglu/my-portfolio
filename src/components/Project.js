import styles from "./Project.module.css";
import Button from "./Button";

function Project({ projectObj }) {
  const handleViewProject = () => {
    window.open(projectObj.url, "_blank");
  };

  const handleViewSource = () => {
    window.open(projectObj.source, "_blank");
  };

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
        <Button className={styles.button} onClick={handleViewProject}>
          View project
        </Button>
        <Button className={styles.button} onClick={handleViewSource}>
          View Source
        </Button>
      </div>
    </div>
  );
}

export default Project;
