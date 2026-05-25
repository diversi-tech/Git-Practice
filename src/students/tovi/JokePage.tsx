 import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TovaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <h2 className={styles.jokeTitle}>Why did the bicycle fall over?</h2>
      <p className={styles.jokeAnswer}>Because it was two-tired! 🚲😂</p>
      <button className={styles.backButton} onClick={onBack}>← Back</button>
    </div>
  );
}