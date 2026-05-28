import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ShaniJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <h2>מה אומר קיר אחד לקיר השני? 🧱</h2>
      <br />
      <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ff9f43" }}>
        "ניפגש בפינה!" 🤭
      </p>
      <br />
      <button onClick={onBack}>← חזרה לדף הבית</button>
    </div>
  );
}