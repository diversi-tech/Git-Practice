import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TovaJokePage2({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🌾</span>
        <h1 className={styles.jokeTitle}>The Award-Winning Scarecrow</h1>
        <p className={styles.jokeText}>Why did the scarecrow win an award?</p>
        <p className={styles.punchline}>Because he was outstanding in his field!</p>
        <button className={styles.backButton} onClick={onBack}>← Back</button>
      </section>
    </div>
  );
}
