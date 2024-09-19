import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <span>© 2024 Abdullah Alioğlu. All rights reserved.</span>
      </div>
      <div className={styles.icons}>
        <a
          href="https://github.com/AbdllhAlioglu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            style={{ color: "#d4d4d4" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abdullah-alioglu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            style={{ color: "#d4d4d4" }}
          />
        </a>
        <a
          href="https://www.instagram.com/aliogluuuabdullah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            style={{ color: "#d4d4d4" }}
          />
        </a>
      </div>
    </div>
  );
}
