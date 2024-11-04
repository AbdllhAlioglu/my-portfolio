import React, { useState } from "react";
import axios from "axios";
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Başarı ya da hata durumu için

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Backend'e POST isteği gönder
      await axios.post("http://localhost:5001/send-email", {
        name,
        email, // Kullanıcının girdiği e-posta adresi
        message,
      });
      // Geri bildirim mesajını ayarla
      setStatus("Message sent successfully!");
      setTimeout(() => {
        setStatus("");
      }, 4000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message.");
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };

  // Mesaj durumuna göre sınıf belirleme
  const messageClass =
    status === "Message sent successfully!" ? styles.success : styles.error;

  return (
    <div className={styles.contactInfo}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
      {status && (
        <p className={`${styles.message} ${messageClass}`}>{status}</p>
      )}
    </div>
  );
}

export default ContactInfo;
