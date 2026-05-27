import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function SheviShapiraJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      
      <div className={styles.jokeContainer}>
        <h1 className={styles.jokeHeader}>סיוט של כל מפתח 💻😨</h1>
        
        <div className={styles.jokeStep}>
          <span className={styles.stepNumber}>שלב א':</span>
          <p className={styles.setup}>
            הקוד שלך לא עובד, ואתה יושב שעות ואין לך מושג למה...
          </p>
        </div>

        <div className={styles.jokeStep}>
          <span className={styles.stepNumber}>שלב ב' (האימה האמיתית):</span>
          <p className={styles.punchline}>
            שינית משהו קטן, עכשיו הקוד פתאום עובד מושלם, **ועדיין אין לך מושג למה!** 😱😭
          </p>
        </div>
      </div>
      
      <button onClick={onBack} className={styles.backButton}>
        ← חזרה לדף הבית
      </button>
      
    </div>
  );
}