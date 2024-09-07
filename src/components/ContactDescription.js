import React from "react";
import styles from "./ContactDescription.module.css";

export default function ContactDescription() {
  return (
    <div className={styles.desc}>
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me if you have any questions or would like to
        discuss a potential project.
      </p>
    </div>
  );
}
