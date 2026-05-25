import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function HillaJokePage2({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.emoji}>🧹</div>
      <p className={styles.setup}>מה המנקה עושה בבית ספר יסודי?</p>
      <p className={styles.punchline}>מנקה יסודי! 😄</p>
      <button className={styles.backBtn} onClick={onBack}>← חזרה</button>
    </div>
  );
}
