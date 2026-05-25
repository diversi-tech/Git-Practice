import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function MaayanJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeHeader}>
        <span className={styles.bigEmoji}>🖥️</span>
      </div>
      <div className={styles.jokeCard}>
        <h2>"למה מתכנתים שונאים את הטבע?"</h2>
        <p>"כי הוא מלא באגים חחח"</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        → חזרה
      </button>
    </div>
  );
}