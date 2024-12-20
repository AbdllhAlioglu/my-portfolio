import React, { useState } from "react";
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Başarı ya da hata durumu için
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://abdullahalioglu-portfolio.vercel.app/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error: ${text}`);
      }

      await response.json();
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
    } finally {
      setIsLoading(false);
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
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status && (
        <p className={`${styles.message} ${messageClass}`}>{status}</p>
      )}
    </div>
  );
}

export default ContactInfo;
