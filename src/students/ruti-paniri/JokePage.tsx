import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function RutiJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.jokePage}>
      <div className={styles.jokeCard}>
        <h2 className={styles.title}>המחשב העקשן</h2>
        <p>אדם אחד שואל את חבר שלו: "איך זה שהמחשב שלך תמיד עובד כל כך מהר?"</p>
        <p>החבר עונה לו: "זה פשוט מאוד, כל פעם כשהוא מתחיל לעבוד לאט, אני מראה לו את חשבון החשמל שלי!"</p>
        <button className={styles.backBtn} onClick={onBack}>
          ← חזרה
        </button>
      </div>
    </div>
  );
}