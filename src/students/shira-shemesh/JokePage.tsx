import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ShiraShemeshJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🍌</span>
        <h1 className={styles.jokeTitle}>בננה נחמדת</h1>
        <p className={styles.jokeText}>איש אחד הלך, הלך, הלך...</p>
        <p className={styles.punchline}>בום, שניצל!</p>
        <button className={styles.backButton} type="button" onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
