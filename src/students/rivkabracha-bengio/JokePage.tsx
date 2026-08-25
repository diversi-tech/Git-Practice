import styles from "./styles.module.css";
import { PageProps } from "../../types";

// מציג את הבדיחה המלאה ומאפשר לחזור לרשימת הכרטיסים.
export default function RivkaBengioJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeHeader} aria-hidden="true">☕</div>
      <div className={styles.jokeCard}>
        <h2>למה הקפה הלך לפסיכולוג?</h2>
        <p>כי הוא הרגיש קצת טחון!</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        ← חזרה
      </button>
    </div>
  );
}
