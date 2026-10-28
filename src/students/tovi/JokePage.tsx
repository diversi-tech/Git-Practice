import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TovaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🚲</span>
        <h1 className={styles.jokeTitle}>למה האופניים נפלו?</h1>
        <p className={styles.jokeText}>Why did the bicycle fall over?</p>
        <p className={styles.punchline}>Because it was two-tired!</p>
        <button className={styles.backButton} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
