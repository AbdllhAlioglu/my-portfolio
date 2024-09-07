import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css"; // CSS modülünü içe aktar

export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* Ana kapsayıcıya stil uygulandı */}
      <div>
        <span>© 2024 Abdullah Alioglu. All rights reserved.</span>
      </div>
      <div className={styles.icons}>
        {" "}
        {/* İkon kapsayıcıya stil uygulandı */}
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
