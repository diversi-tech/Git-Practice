import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function AyeletJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.jokePage}>
      {/* תזכורת קלה לכותרת */}
      <p className={styles.setupText}>
        "ארבעת השלבים הרשמיים של מתכנת כשהקוד לא עובד..."
      </p>
      
      {/* קופסת הפאנץ' הממורכזת */}
      <div className={styles.punchlineBox}>
        <div style={{ fontSize: "2rem" }}>🤦‍♂️💥🛑🔍</div>
        
        <div className={styles.punchlineText}>
          1. מוזר, במחשב שלי זה עבד... <br />
          2. אוקיי, למה זה עושה את זה? <br />
          3. אההה! הבנתי למה! <br />
          4. רגע... למה זה עובד עכשיו?! 🤔
        </div>
      </div>
      
      <div>
        <button onClick={onBack} className={styles.backButton}>
          ↩️ חזרה לקוד המקורי
        </button>
      </div>
    </div>
  );
}