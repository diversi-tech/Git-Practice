import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YaelJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeHeader}>
        <div className={styles.bigEmoji}>🍕</div>
        <p>פיצריה</p>
      </div>

      <div className={styles.jokeCard}>
        <h2>פיצריה, עבודה עם שליחות🍕</h2>
        <button onClick={onBack} className={styles.backBtn}>
          ← חזרה
        </button>
      </div>
    </div>
  );
}