import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function EsterLewinJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeBox}>
        <p className={styles.jokeTitle}>למה המחשב הביא כובע למסיבה?</p>
        <p className={styles.jokeAnswer}>כי הוא רצה לשמור על קודו מהקור!!!</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        ← חזרה
      </button>
    </div>
  );
}