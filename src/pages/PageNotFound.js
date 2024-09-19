import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css"; // CSS Modules olarak import ediyoruz

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className={styles.backHome}>
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
