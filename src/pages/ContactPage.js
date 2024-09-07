import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactDesription from "../components/ContactDescription";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <div>
      <ContactDesription />
      <ContactInfo />
    </div>
  );
}
