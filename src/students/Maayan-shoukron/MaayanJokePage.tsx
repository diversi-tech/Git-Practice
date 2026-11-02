import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function MaayanJokePage({ onBack }: PageProps) {
  
    return (
  <div className={`joke-page ${styles.jokePage}`}>
    <div className={styles.bubble}>
      <p>מה אמר החלב שנהנה מבדיחה?</p>
    </div>

    <div className={styles.bubble}>
      <p>נשפכתי מצחוק!</p>
    </div>

    <button onClick={onBack}>← חזרה</button>
  </div>
);
  
}