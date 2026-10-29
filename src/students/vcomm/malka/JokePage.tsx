import styles from "./styles.module.css";
import { PageProps } from "../../../types";

export default function MalkaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">💻🍪</span>
        <h1 className={styles.jokeTitle}>דיאטת מתכנתים</h1>
        <p className={styles.jokeText}>מה מתכנת עושה כשהוא רוצה להרזות?</p>
        <p className={styles.punchline}>מוחק את ה-Cookies בדפדפן!</p>
        <button className={styles.backButton} type="button" onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
