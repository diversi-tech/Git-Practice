import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function AyalaSamsonJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeHeader}>
        <span className={styles.bigEmoji}>🐱</span>
      </div>
      <div className={styles.jokeCard}>
        <h2>מה עושה חתול בזמן שמתכנת?</h2>
        <p>הוא מקליד עם purr-fect accuracy! 😹</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        → חזרה
      </button>
    </div>
  );
}
