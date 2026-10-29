import styles from "./styles.module.css";
import { PageProps } from "../../../types";

export default function EtiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🤵</span>
        <h1 className={styles.jokeTitle}>חליפה למחפשי עבודה</h1>
        <p className={styles.jokeText}>חנות אחת תלתה שלט: ״כאן מוכרים חליפות לכל סוגי העבודה״.</p>
        <p className={styles.punchline}>נכנס איש אחד ושאל את המוכר: ״יש לכם חליפה בשביל מחפשי עבודה?״</p>
        <button className={styles.backButton} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
