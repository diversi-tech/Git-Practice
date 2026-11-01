import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function HadasJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.coffeeContainer}>
        {/* כותרת מעוצבת בסגנון בית קפה */}
        <div className={styles.coffeeHeader}>
          <span className={styles.coffeeIcon}>☕</span>
          <h1 className={styles.pageTitle}>The Java Language</h1>
          <span className={styles.coffeeIcon}>☕</span>
        </div>
        
        <div className={styles.jokeContent}>
          <div className={styles.questionBox}>
            <h2>איזה מורה נכנסת לשיעור עם כוס קפה? 🤔</h2>
          </div>
          
          <div className={styles.punchlineBox}>
            <p className={styles.punchlineText}>
              המורה ל<strong>ג'אווה</strong>! 👩‍💻✨
            </p>
            <span className={styles.subText}>(Java ☕)</span>
          </div>
        </div>

        <button className={styles.coffeeBackButton} onClick={onBack}>
          <span>סיימתי את הקפה (חזרה)</span>
        </button>
      </div>
    </div>
  );
}