import styles from "./styles.module.css";
import { PageProps } from "../../../types";

export default function YaelJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🧮</span>
        <h1 className={styles.jokeTitle}>מורה ותלמיד</h1>
        <p className={styles.jokeText}>מורה שואלת תלמיד: ״אם יש לך 10 שקלים ואתה מבקש מאמא עוד 10 — כמה יש לך?״</p>
        <p className={styles.jokeText}>התלמיד עונה: ״10״.</p>
        <p className={styles.jokeText}>המורה: ״אתה לא יודע חשבון?״</p>
        <p className={styles.punchline}>התלמיד: ״את לא מכירה את אמא שלי...״ 😄</p>
        <button className={styles.backButton} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
