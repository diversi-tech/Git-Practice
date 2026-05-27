import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function SheviShapiraJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      {/* 🔴 החליפי את הטקסטים האלו בבדיחה האמיתית שלך */}
      <p className={styles.setup}>למה מתכנתים מעדיפים מצב חשוך (Dark Mode)?</p>
      <p className={styles.punchline}>כי האור מושך באגים! 🐛</p>
      
      <button onClick={onBack} className={styles.backButton}>← Back</button>
    </div>
  );
}