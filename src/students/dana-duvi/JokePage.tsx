import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function DanaDuviJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeHeader}>
        <span className={styles.bigEmoji}>🐻</span>
      </div>
      <div className={styles.jokeCard}>
        <h2>למה הדוב לא משתמש במחשב?</h2>
        <p>כי הוא מפחד מה-mouse! 🐭</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        → חזרה
      </button>
    </div>
  );
}
