import React from 'react';
import styles from './styles.module.css';

interface JokePageProps {
  onBack: () => void;
}

export default function YaelJokePage({ student, onBack }: any) {  return (
    <div className={styles.pageWrapper}>
      {/* שורת אייקונים דקורטיבית למעלה */}
      <div className={styles.decorIcons}>
        👦 💬 ✨ 🧠 💡
      </div>

      {/* התיבה המרכזית של הבדיחה */}
      <div className={styles.jokeBox}>
        <div className={styles.boxHeader}>
          <span className={styles.headerBadge}>💡 הבדיחה</span>
        </div>

        {/* קופסת השאלה */}
        <div className={styles.questionBox}>
          <p className={styles.dialogLabel}>אמא שואלת:</p>
          <p className={styles.textMain}>"למה אתה תמיד מדבר עם עצמך?"</p>
        </div>

        {/* קופסת התשובה */}
        <div className={styles.answerBox}>
          <p className={styles.dialogLabelAnswer}>הילד עונה:</p>
          <p className={styles.textMain}>"כי אני אוהב לדבר עם אנשים חכמים!"</p>
        </div>

        {/* כפתור חזרה */}
        <button onClick={onBack} className={styles.backButton}>
          ← חזרה 
        </button>
      </div>
    </div>
  );
};