import styles from "./styles.module.css";
import { PageProps } from "../../../types";

export default function ShaniJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🐛</span>
        <h1 className={styles.jokeTitle}>בדיחת באגים</h1>
        <p className={styles.jokeText}>למה מתכנתים מעדיפים מצב חשוך?</p>
        <p className={styles.punchline}>כי האור מושך באגים!</p>
        <button className={styles.backButton} type="button" onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
