import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function MaayanJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>למה המתכנת הלך לישון?</p>
      <p>כי הוא הגיע ל־sleep mode 😴</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}