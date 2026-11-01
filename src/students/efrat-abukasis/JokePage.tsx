import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function EfratAbukasisJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.jokePage}>
      <div className={styles.jokeContainer}>
        <h1 className={styles.question}>למה המחשב של המתכנתת תמיד עייף? 🤔</h1>
        
        <div className={styles.answerBox}>
          <p>כי הוא עובד ב-<span className={styles.highlight}>Background</span> כל הלילה! 😴</p>
        </div>

        <button className={styles.backButton} onClick={onBack}>← חזרה לרשימה</button>
      </div>
    </div>
  );
}