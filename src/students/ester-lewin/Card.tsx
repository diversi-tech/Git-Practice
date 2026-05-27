import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function EsterLewinCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <span className={styles.emoji}>💻</span>
        <div>
          <h2 className={styles.title}>{student.jokeTitle}</h2>
          <p className={styles.name}>{student.name}</p>
        </div>
      </div>
      <div className={styles.cardHint}>לחץ כדי לקרוא את הבדיחה</div>
    </div>
  );
}