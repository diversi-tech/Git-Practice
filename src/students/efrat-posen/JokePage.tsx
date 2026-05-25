import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function efratJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.jokePage}>
      <div className={styles.jokeCard}>
        <div className={styles.jokeHeader}>
          <div className={styles.bigEmoji}>😉</div>
          <h2 className={styles.title}>בדיחה ממש מצחיקה</h2>
          <p className={styles.name}>אפרת פוזן מציגה:</p>
        </div>

        <p className={styles.jokeText}>
          איך קוראים למי שלא מצליח למצוא דפי כיסוי לסושי שלו? אובד אצות.
        </p>

        <button className={styles.backBtn} onClick={onBack}>
          ← חזרה
        </button>
      </div>
    </div>
  );
}