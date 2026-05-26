import styles from "./styles.module.css";

export default function YaelJokePage({ onBack }: any) {
  return (
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
      </div>

      {/* קופסת השאלה */}
      <div className={styles.questionBox}>
        <p className={styles.dialogLabel}>אמא שואלת:</p>
        <p className={styles.textMain}>"למה אתה תמיד מדבר WITH עצמך?"</p>
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
  );
}