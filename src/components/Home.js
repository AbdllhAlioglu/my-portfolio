import styles from "./Home.module.css";
function Home() {
  return (
    <div>
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
            <button className={styles.btn}>View Project</button>
            <button className={styles.btn}>Contact Me</button>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/avatar.jpg" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
