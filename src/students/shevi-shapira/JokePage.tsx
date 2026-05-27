import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function SheviShapiraJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.terminalContainer}>
        <div className={styles.terminalHeader}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.title}>מערכת הבדיקות - הרצת לוגיקה</span>
        </div>
        
        <div className={styles.terminalBody}>
          <div className={styles.output}>
            <p className={styles.setup}>
              אשתו של מתכנת שולחת אותו לסופר: <br />
              "תקנה כיכר לחם אחת. ואם יש ביצים — תקנה עשרה".
            </p>
          </div>

          <div className={styles.output}>
            <p className={styles.punchline}>
              המתכנת חוזר הביתה עם 10 כיכרות לחם. <br />
              אשתו המומה: "למה קנית עשרה כיכרות לחם?!" <br />
              המתכנת: "כי היו ביצים". 🥚🫥
            </p>
          </div>
        </div>
      </div>

      <button onClick={onBack} className={styles.cyberButton}>
        חזרה לדף הבית
      </button>
    </div>
  );
}