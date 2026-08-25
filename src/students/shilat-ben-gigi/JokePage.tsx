import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ShilatBenGigiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeHeader}>
        <span className={styles.bigEmoji}>💻</span>
      </div>
      <div className={styles.jokeCard}>
        <h2>למה המתכנת לקח סולם למשרד?</h2>
        <p>כי הוא רצה להגיע לרמה הבאה! 🪜</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        → חזרה
      </button>
    </div>
  );
}
