import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function NoaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">💻</span>
        <h1 className={styles.jokeTitle}>בדיחה בינארית</h1>
        <p className={styles.jokeText}>יש 10 סוגים של אנשים בעולם:</p>
        <p className={styles.punchline}>אלו שמבינים קוד בינארי, ואלו שלא. 🤓</p>
        <button className={styles.backButton} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
