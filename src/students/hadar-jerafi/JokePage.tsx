import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function HadarJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🍞🥚</span>
        <h1 className={styles.jokeTitle}>אם יש ביצים</h1>
        <p className={styles.jokeText}>אשתו של מתכנת מבקשת ממנו: ״תקפוץ למכולת ותקנה כיכר לחם. אם יש ביצים — תביא עשר״.</p>
        <p className={styles.jokeText}>אחרי חצי שעה הוא חוזר עם עשר כיכרות לחם.</p>
        <p className={styles.jokeText}>אשתו שואלת: ״למה קנית עשר כיכרות?״</p>
        <p className={styles.punchline}>המתכנת עונה: ״כי היו ביצים״.</p>
        <button className={styles.backButton} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
