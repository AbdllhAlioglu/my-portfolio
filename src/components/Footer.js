import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <span>© 2024 Abdullah Alioğlu. All rights reserved.</span>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          style={{ color: "#d4d4d4" }}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          style={{ color: "#d4d4d4" }}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          style={{ color: "#d4d4d4" }}
        />
      </div>
    </div>
  );
}
