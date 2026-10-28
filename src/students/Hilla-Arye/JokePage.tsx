import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function HillaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🌙</span>
        <h1 className={styles.jokeTitle}>Dark Mode</h1>
        <p className={styles.jokeText}>למה מתכנתים מעדיפים להשתמש במצב כהה במסך?</p>
        <p className={styles.punchline}>כי האור מושך באגים!</p>
        <button className={styles.backButton} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
