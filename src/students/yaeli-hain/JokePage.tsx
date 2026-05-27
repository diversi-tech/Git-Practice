import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function yaelihainJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p className={styles.jokeQuestion}>
        למה מתכנתים אוהבים להשתמש במצב לילה (Dark Mode)?
      </p>
      
      <p className={styles.jokeAnswer}>
        כי אור מושך באגים. 😉
      </p>
      
      <button onClick={onBack} className={styles.backBtn}>
        ← חזרה
      </button>
    </div>
  );
}