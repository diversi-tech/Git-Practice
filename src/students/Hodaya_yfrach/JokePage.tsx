import styles from "./styles.module.css";
import { PageProps } from "../../types";
import bgImage from '../Hodaya_yfrach/q.jpg'; 

export default function HodayaYfrachJokePage({ onBack }: PageProps) {
  return (
    <div 
      className={styles.pageWrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* שיניתי מ-card ל-pageContainer כדי למנוע בלבול עם קומפוננטת הכרטיסייה */}
      <main className={styles.pageContainer}>
        
        {/* אימוג'י דקורטיבי */}
        <div className={styles.emoji} aria-hidden="true">🤔</div>
        
        <h1 className={styles.setupText}>
          מה עושים כשיש הרבה שגיאות בהעלאה ל-GITHUB?
          <code className={styles.errorCode}>fatal: refusing to merge unrelated histories</code>
        </h1>
        
        <p className={styles.punchline}>
          עושים הפעלה מחדש למחשב ומקווים שהקונפליקטים יעלמו 😅
        </p>
        
        <button 
          type="button" 
          onClick={onBack} 
          className={styles.backButton}
          aria-label="חזור לדף הקודם"
        >
          &larr; חזור
        </button>
        
      </main>
    </div>
  );
}