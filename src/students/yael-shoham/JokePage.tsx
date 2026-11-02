import styles from "./styles.module.css";

export default function YaelJokePage({ onBack }: any) {
  return (
   <div className={styles.pageWrapper}>
      <div className={styles.decorIcons}>👦 💬 ✨</div>

      <div className={styles.jokeContainer}>
        <div className={styles.questionBox}>
          <span className={styles.dialogLabel}>אמא שואלת:</span>
          <p className={styles.textMain}>"למה אתה תמיד מדבר עם עצמך?"</p>
        </div>

        <div className={styles.answerBox}>
          <span className={styles.dialogLabelAnswer}>הילד עונה:</span>
          <p className={styles.textMain}>"כי אני אוהב לדבר עם אנשים חכמים!"</p>
        </div>
      </div>

      <button onClick={onBack} className={styles.backButton}>
        ← חזרה 
      </button>
    </div>
  );
}