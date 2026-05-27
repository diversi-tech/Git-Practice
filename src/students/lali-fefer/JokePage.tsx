import { PageProps } from "../../types";
import styles from "./styles.module.css";

export default function JokePage({ onBack }: PageProps) {
  return (
    <div className={styles.jokePage}>
      <button className={styles.backButton} onClick={onBack}>
        ← חזרה לעמוד הבית
      </button>

      <div className={styles.jokeContainer}>
        <div className={styles.jokeHeader}>
          <h1 className={styles.jokeTitle}>הבדיחה</h1>
          <span className={styles.jokeEmoji}>💡</span>
        </div>

        <div className={styles.jokeSetup}>
          <h2>שאלה:</h2>
          <p>
למה מתכנתים מעדיפים להשתמש במצב כהה (Dark Mode) במסך שלהם? </p>
        </div>

        <div className={styles.jokePunchline}>
          <h2>תשובה:</h2>
          <p>
            כי האור מושך באגים.
          </p>
        </div>

        <div className={styles.jokeReflection}>
          <h3></h3>
          <p>
           🤣🤣🤣
          </p>
        </div>
      </div>
    </div>
  );
}
