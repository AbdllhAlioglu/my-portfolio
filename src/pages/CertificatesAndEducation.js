import React from "react";
import { certificationsData } from "../data";
import styles from "./CertificatesAndEducation.module.css";

function CertificatesAndEducation() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Certificates & Education</h2>
      <ul className={styles.certificationList}>
        {certificationsData.map((cert, index) => (
          <li key={index} className={styles.certificationItem}>
            <h3 className={styles.certTitle}>{cert.title}</h3>
            <p className={styles.institution}>
              {cert.institution} -{" "}
              <span className={styles.date}>{cert.date}</span>
            </p>
            <p className={styles.description}>{cert.description}</p>
            <a
              href={cert.pdf}
              className={styles.pdfLink}
              target="_blank" // Yeni sekmede açılması için
              rel="noopener noreferrer" // Güvenlik için
            >
              View Certificate (PDF)
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CertificatesAndEducation;
