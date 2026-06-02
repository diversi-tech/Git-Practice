import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TamarZwiebelJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.content}>
        <h1>💡 בדיחת הייטק 💡</h1>
        
        <p className={styles.question}>
          🤔 כמה מתכנתים צריך כדי להחליף נורה שרופה?
        </p>
        
        <p className={styles.answer}>
          🛠️ אף אחד. זו בעיית חומרה, שהאנשים של ה-Hardware יטפלו בה! 💻
        </p>
        
        <button className={styles.backBtn} onClick={onBack}>
          ← חזרה לדף הבית
        </button>
      </div>
    </div>
  );
}