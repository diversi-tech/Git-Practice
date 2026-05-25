import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TovaJokePage2({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <h2 className={styles.jokeTitle}>Why did the scarecrow win an award?</h2>
      <p className={styles.jokeAnswer}>Because he was outstanding in his field! 🌾😂</p>
      <button className={styles.backButton} onClick={onBack}>← Back</button>
    </div>
  );
}