import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YWeissJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.mainContainer}>
        
        {/* כותרת הדף */}
        <div className={styles.pageHeader}>
          <div className={styles.glitchWrapper}>
            <h1 className={styles.pageTitle}>⚡ ארבעת שלבי האבל והקוד ⚡</h1>
          </div>
          <p className={styles.intro}>
            כל מתכנת עובר את מסלול הייסורים הבא בכל פעם שהוא כותב קוד חדש:
          </p>
        </div>

        {/* שלבי הבדיחה */}
        <div className={styles.stepsGrid}>
          
          <div className={`${styles.stepCard} ${styles.step1}`}>
            <div className={styles.stepNum}>01</div>
            <div className={styles.stepIcon}>🚀</div>
            <div className={styles.stepContent}>
              <h3>שלב האופטימיות המוגזמת</h3>
              <p>"הקוד שלי מושלם, הוא רץ חלק, אין סיכוי שיש פה באגים".</p>
            </div>
          </div>

          <div className={`${styles.stepCard} ${styles.step2}`}>
            <div className={styles.stepNum}>02</div>
            <div className={styles.stepIcon}>🤯</div>
            <div className={styles.stepContent}>
              <h3>שלב ההכחשה</h3>
              <p>"רגע, למה זה קרס? אצלי במחשב המקומי (Localhost) זה עבד מצוין, הבעיה בטוח בשרת".</p>
            </div>
          </div>

          <div className={`${styles.stepCard} ${styles.step3}`}>
            <div className={styles.stepNum}>03</div>
            <div className={styles.stepIcon}>😭</div>
            <div className={styles.stepContent}>
              <h3>שלב הייאוש</h3>
              <p>"מחקתי הכל, כתבתי מחדש, וזה עדיין לא עובד. אני לא מבין כלום, אני מחליף מקצוע".</p>
            </div>
          </div>

          <div className={`${styles.stepCard} ${styles.step4}`}>
            <div className={styles.stepNum}>04</div>
            <div className={styles.stepIcon}>🫣</div>
            <div className={styles.stepContent}>
              <h3>שלב הפחד הבלתי מוסבר</h3>
              <p>"הקוד פתאום עובד! הכל רץ חלק... ואני אין לי מושג ירוק למה זה עובד עכשיו. עדיף לא לגעת במקלדת יותר".</p>
            </div>
          </div>

        </div>

        {/* כפתור חזרה */}
        <button className={styles.backBtn} onClick={onBack}>
          <span>חזרה   ↩</span>
        </button>

      </div>
    </div>
  );
}