import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function RivkaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeBox}>
        <p className={styles.jokeSetup}>Why did the computer go to the doctor?</p>
        <p className={styles.jokePunchline}>Because it had too many bugs 🤖🐞</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        ↺&nbsp;back
      </button>
    </div>
  );
}
