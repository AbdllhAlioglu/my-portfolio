// src/components/CertificatesAndEducation.js
import React from "react";
import styles from "./CertificatesAndEducation.module.css";

function CertificatesAndEducation() {
  const certifications = [
    {
      title: "React Developer Certification",
      institution: "Coursera",
      date: "March 2023",
      description:
        "Learned advanced React concepts, hooks, and state management.",
      pdf: "",
    },
    {
      title: "Full Stack Web Development",
      institution: "Udemy",
      date: "December 2022",
      description:
        "Covered HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
      pdf: "",
    },
    {
      title: "Python for Everybody",
      institution: "edX",
      date: "September 2022",
      description:
        "Introductory course on Python, data structures, and handling web data.",
      pdf: "",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      institution: "freeCodeCamp",
      date: "June 2022",
      description:
        "Focused on solving algorithms and mastering data structures using JavaScript.",
      pdf: "",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Certificates & Education</h2>
      <ul className={styles.certificationList}>
        {certifications.map((cert, index) => (
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
              target="_blank"
              rel="noopener noreferrer"
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
