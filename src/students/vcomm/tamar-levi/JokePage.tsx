import styles from "./styles.module.css";
import { PageProps } from "../../../types";

export default function TamarJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🍪</span>
        <h1 className={styles.jokeTitle}>דיאטת Cookies</h1>
        <p className={styles.jokeText}>איך מתכנתת עושה דיאטה?</p>
        <p className={styles.punchline}>היא פשוט מוחקת את ה-Cookies מהדפדפן!</p>
        <button className={styles.backButton} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
