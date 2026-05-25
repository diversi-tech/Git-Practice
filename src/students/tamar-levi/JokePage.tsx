import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TamarJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <h1 className={styles.question}>איך מתכנתת עושה דיאטה?</h1>
      <p className={styles.answer}>היא פשוט מוחקת את ה-Cookies מהדפדפן! 🍪</p>
      <button className={styles.backButton} onClick={onBack}>← חזרה</button>
    </div>
  );
}