import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function AyalaKleinJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🔁</span>
        <h1 className={styles.jokeTitle}>לולאה שלא עוצרת</h1>
        <p className={styles.jokeText}>מה מתכנת עושה כשהוא לא מצליח לישון?</p>
        <p className={styles.punchline}>סופר כבשים? לא, הוא פשוט בודק למה הלולאה לא עוצרת!</p>
        <button className={styles.backButton} type="button" onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
