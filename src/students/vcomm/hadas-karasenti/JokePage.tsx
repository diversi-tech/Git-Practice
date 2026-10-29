import styles from "./styles.module.css";
import { PageProps } from "../../../types";

export default function HadasKarasentiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🦠💻</span>
        <h1 className={styles.jokeTitle}>המחשב אצל הרופא</h1>
        <p className={styles.jokeText}>למה המחשב הלך לרופא?</p>
        <p className={styles.punchline}>כי היה לו וירוס!</p>
        <button className={styles.backButton} type="button" onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
