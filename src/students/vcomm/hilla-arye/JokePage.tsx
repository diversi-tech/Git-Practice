import styles from "./styles.module.css";
import { PageProps } from "../../../types";

export default function HillaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🧹</span>
        <h1 className={styles.jokeTitle}>מנקה יסודי</h1>
        <p className={styles.jokeText}>מה המנקה עושה בבית ספר יסודי?</p>
        <p className={styles.punchline}>מנקה יסודי! 😄</p>
        <button className={styles.backButton} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
