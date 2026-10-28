import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function RivkaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokePanel}>
        <span className={styles.jokeIcon} aria-hidden="true">🤖🐞</span>
        <h1 className={styles.jokeTitle}>The Computer &amp; The Doctor</h1>
        <p className={styles.jokeText}>Why did the computer go to the doctor?</p>
        <p className={styles.punchline}>Because it had too many bugs!</p>
        <button className={styles.backButton} onClick={onBack}>← Back</button>
      </section>
    </div>
  );
}
