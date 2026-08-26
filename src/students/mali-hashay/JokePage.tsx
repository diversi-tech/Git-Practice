import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function MaliHashayJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeHeader}>
        <span className={styles.bigEmoji}>🐒</span>
        <span className={styles.steam}>❄ ❄ ❄</span>
      </div>
      <div className={styles.jokeCard}>
        <p className={styles.setup}>למה שימפנזים לא יוצאים מהבית בחורף?</p>
        <p className={styles.punchline}>כי הם קופים!</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        → חזרה
      </button>
    </div>
  );
}
