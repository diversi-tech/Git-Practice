import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function HennyJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeCard}>
        <p>למה מתכנתים מעדיפים מצב כהה (Dark Mode)?</p>
        <p>כי האור מושך חרקים (Bugs)! 🐛</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>← חזרה</button>
    </div>
  );
}