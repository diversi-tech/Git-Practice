import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function michaleJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>בדיחה מיכל</p>
      <p>תשובת הבדיחה</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}