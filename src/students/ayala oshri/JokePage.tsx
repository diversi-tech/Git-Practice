import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function MyJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      {/* Animated bubbles background */}
      <div className={styles.bubblesContainer}>
        {[...Array(12)].map((_, i) => (
          <span key={i} className={styles.floatingBubble} style={{
            left: `${(i * 8.3) % 100}%`,
            width: `${12 + (i % 4) * 8}px`,
            height: `${12 + (i % 4) * 8}px`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }} />
        ))}
      </div>

      {/* Decorative top row */}
      <div className={styles.topDecor}>
        <span>🐥</span>
        <span>🛁</span>
        <span>🫧</span>
        <span>🚿</span>
        <span>🐥</span>
      </div>

      {/* Joke card */}
      <div className={styles.jokeCard}>
        <div className={styles.jokeHeader}>
          <span className={styles.questionMark}>?</span>
          <h2 className={styles.jokeLabel}>הבדיחה</h2>
        </div>

        <div className={styles.questionBlock}>
          <p className={styles.jokeQuestion}>למה למתכנתים לוקח הרבה זמן להתקלח?</p>
        </div>

        <div className={styles.dividerRow}>
          <span className={styles.dividerEmoji}>🫧</span>
          <div className={styles.dividerLine} />
          <span className={styles.dividerEmoji}>🫧</span>
        </div>

        <div className={styles.answerBlock}>
          <p className={styles.jokeAnswer}>
            כי על השמפו כתוב:<br />
            <strong>לחפוף, לשטוף, ולחזור על הפעולה.</strong>
          </p>
        </div>
      </div>

      <button className={styles.backButton} onClick={onBack}>
        ← חזרה
      </button>
    </div>
  );
}
