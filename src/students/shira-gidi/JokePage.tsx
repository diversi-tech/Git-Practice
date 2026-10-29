import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ShiraGidiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🌊</span>
        <h1 className={styles.jokeTitle}>בדיחת מתכנתים</h1>
        <p className={styles.jokeText}>למה מחשבים לא הולכים לים?</p>
        <p className={styles.punchline}>כי הם מפחדים מהגלישה!</p>
        <button className={styles.backButton} type="button" onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
