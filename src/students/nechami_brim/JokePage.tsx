// import styles from "./styles.module.css";
// import { PageProps } from "../../types";

// export default function NechamiJokePage({ onBack }: PageProps) {
//   return (
//     <div className={`joke-page ${styles.jokePage}`}>
//       <p>חוקי הפיזיקה של ההייטק</p>
//       <p></p>
//       <button onClick={onBack}>← חזרה</button>
//     </div>
//   );
// }


//-------------
import React, { useState } from 'react';
import styles from "./styles.module.css";

const DevHumorComponent = () => {
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h3 className={styles.heading}>
          סיפור אמיתי בצוות פיתוח 💻
        </h3>

        {/* הודעת הסטאז'ר */}
        <div className={styles.messageBox}>
          <strong className={styles.messageTitle}>
            👶 סטאז'ר בפרקטיקום:
          </strong>
          <p className={styles.messageText}>
            "איך זה הגיוני שהקוד שכתבתי אתמול עבד מעולה, והיום בבוקר בלי שנגעתי בו הוא פתאום לא עובד?"
          </p>
        </div>

      {/* כפתור לחשיפת התשובה */}
      {!showPunchline && (
        <button onClick={() => setShowPunchline(true)} className={styles.button}>
          מה המפתח הבכיר ענה? 🤔
        </button>
      )}

      {/* תגובת המפתח הבכיר */}
      {showPunchline && (
        <div className={styles.punchlineBox}>
          <strong className={styles.punchlineTitle}>
            👴 מפתח בכיר (מחייך):
          </strong>
          <p className={styles.punchlineText}>
            "ברוך הבא להייטק. חוק שימור הבאגים אומר: קוד אף פעם לא באמת 'עובד', הוא פשוט לוקח הפסקת קפה לפעמים." ☕
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default DevHumorComponent;