import styles from "./Styles.module.css";
import { PageProps } from "../../types";

export default function TamarJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`} dir="rtl">
      <article className={styles.joke}>
        <span className={styles.eyebrow}>בדיחה בתחבורה ציבורית</span>
        <h1>המקום באוטובוס</h1>
        <div className={styles.dialogue}>
          <p>אתמול, באוטובוס, נתתי את מקומי לזקן עיוור.</p>
          <p className={styles.punchline}>היום פוטרתי מתפקידי כנהג אוטובוס..</p>
        </div>
      </article>
      <button className={styles.backButton} onClick={onBack}>
        <span aria-hidden="true">→</span> חזרה
      </button>
    </div>
  );
}