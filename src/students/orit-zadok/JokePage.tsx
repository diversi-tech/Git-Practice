import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function OritJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeContainer}>
        <h1 className={styles.setup}>🛒 אשתו של מתכנת אומרת לו: "תקפוץ לסופר, תקנה כיכר לחם. אם יש ביצים – תביא עשר".</h1>
        <p className={styles.punchline}>🍞 הוא חוזר הביתה עם 10 כיכרות לחם!</p>
        <button className={styles.backButton} onClick={onBack}>
          ← חזרה לדף הבית
        </button>
      </div>
    </div>
  );
}
