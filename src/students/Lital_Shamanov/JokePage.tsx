import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function LitalShamanovJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      {/* אייקונים דקורטיביים בראש העמוד */}
      <div className={styles.emojiHeader}>🌲 💻 🎒</div>
      
      {/* כותרת הבדיחה */}
      <h2>למה מתכנתים שונאים לטייל בטבע? 🤔</h2>
      
      {/* תוכן הבדיחה */}
      <p>כי יש שם יותר מדי <strong>באגים</strong> 🐜 ואין להם מושג איפה ה-<strong>Wi-Fi</strong>... 🌐🔌</p>
      
      {/* כפתור החזרה המעוצב */}
      <button onClick={onBack} className={styles.backButton}>
        ↩️ חזרה לרשימה
      </button>
    </div>
  );
}