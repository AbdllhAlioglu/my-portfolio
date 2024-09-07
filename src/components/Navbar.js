import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <h1>Abdullah Alioğlu</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Project</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
