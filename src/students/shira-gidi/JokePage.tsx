import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function shiraGidiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>כותרת הבדיחה</p>
      <p>תשובת הבדיחה</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}