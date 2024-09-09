import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1>
        <Link to="/">Abdullah Alioğlu</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Project</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/certificates">Certificates</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
