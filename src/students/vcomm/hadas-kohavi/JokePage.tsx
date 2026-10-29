import styles from "./styles.module.css";
import { PageProps } from "../../../types";

export default function HadasKohaviJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">☕</span>
        <h1 className={styles.jokeTitle}>כוס קפה</h1>
        <p className={styles.jokeText}>איזו מורה נכנסת לשיעור עם כוס קפה?</p>
        <p className={styles.punchline}>המורה לג׳אווה! 👩‍💻</p>
        <button className={styles.backButton} type="button" onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
