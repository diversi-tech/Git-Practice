import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function NoaMegeraJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <span className={styles.beeLeft1}>🐞</span>
      <span className={styles.beeLeft2}>🐞</span>
      <span className={styles.beeRight1}>🐞</span>
      <span className={styles.beeRight2}>🐞</span>
      
      <div className={styles.content}>
        <p className={styles.question}>למה באגים בקוד הם כמו ילדים קטנים?</p>
        
        {/* החיפושית המרכזית המוגדלת עם סימן שווה ואימוג'י ילדים */}
        <div className={styles.divider}>🐞 = 🧑‍🤝‍🧑</div>
        
        <p className={styles.punchline}>
          כי כשתהיי איתם לבד הם יעשו מלא רעש ובלאגן, אבל ברגע שתקראי לראש
          הצוות כדי להראות לו – הם פתאום ייעלמו ויתנהגו כאילו כלום לא קרה! 🫥🐞
        </p>
      </div>
      
      <button className={styles.backButton} onClick={onBack}>
        ← חזרה לכל הבדיחות
      </button>
    </div>
  );
}