import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function SaritJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.jokePage}>
      {/* בועות סבון מרחפות ברקע */}
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>

      {/* אזור אימוג'י אמבטיה וחייכן */}
      <div className={styles.emojiContainer}>
        <span className={styles.mainEmoji}>🛁</span>
        <span className={styles.sparkleEmoji}>🧼✨</span>
      </div>

      {/* קופסת הבדיחה */}
      <div className={styles.jokeBox}>
        <h1 className={styles.title}>אופרת סבון 🧼</h1>
        <p className={styles.jokeSetup}>
          כייף לשיר במקלחת עד שנכנס לך שמפו לתוך הפה...
        </p>
        <p className={styles.jokePunchline}>
          - נו? <br />
          ואז זה הופך לאופרת סבון!<br /> 
          🤣🤣🤣🤣
        </p>
        
        <button className={styles.backBtn} onClick={onBack}>
          ← חזרה
        </button>
      </div>
    </div>
  );
}
