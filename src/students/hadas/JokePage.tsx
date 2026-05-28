import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function HadasJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeContainer}>
        <p className={styles.setup}>למה מתכנתים תמיד קופאים מקור?</p>
        <p className={styles.punchline}>כי הם אוהבים לפתוח המון חלונות! 🪟❄️</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>← חזרה</button>
    </div>
  );
}