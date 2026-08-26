import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function AlumasHilatJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeHeader}>
        <span className={styles.bigEmoji}>😄</span>
      </div>
      <div className={styles.jokeCard}>
        <h2>למה המחשב הלך לרופא?</h2>
        <p>כי היה לו וירוס! 🦠</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        → חזרה
      </button>
    </div>
  );
}