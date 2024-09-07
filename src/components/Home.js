import { Link } from "react-router-dom";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <h2>Abdullah Alioğlu</h2>
        <h3>React Developer</h3>
        <p>
          I'm a passionate full-stack developer with expertise in building
          modern web applications. I love creating user-friendly and scalable
          solutions.
        </p>
        <div className={styles.btnGroup}>
          <Link to="/projects">View Project!</Link>
          <Link to="/contact">Contact Me!</Link>
        </div>
      </div>
      <div className={styles.image}>
        <img src="/avatar.jpg" alt="avatar" />
      </div>
    </div>
  );
}

export default Home;
