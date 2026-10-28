import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function HillaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <p className={styles.setup}>למה מתכנתים מעדיפים להשתמש במצב כהה (Dark Mode) במסך?</p>
        <p className={styles.punchline}>כי האור מושך באגים!</p>
        <button className={styles.backButton} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
