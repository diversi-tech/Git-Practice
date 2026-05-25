import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TaliJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeBox}>
        <h2 className={styles.setup}>מה אמר הקקטוס לבלון?</h2>
        <p className={styles.punchline}>״אל תתקרב, אני דוקר." 🎈🌵</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        ← חזרה
      </button>
    </div>
  );
}
