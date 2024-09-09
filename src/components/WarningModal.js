import React, { useEffect, useState } from "react";
import styles from "./WarningModal.module.css";

function WarningModal() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    setShowModal(false);
    localStorage.setItem("modalClosed", "true"); // Modalı kapatıldı olarak işaretle
  };

  if (!showModal) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Warning!</h2>
        <p>The website is currently under development</p>
        <button onClick={handleConfirm} className={styles.confirmButton}>
          Tamam
        </button>
      </div>
    </div>
  );
}

export default WarningModal;
