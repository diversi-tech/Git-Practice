import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function Card({ student, onClick }: CardProps) {
  return (
    <button onClick={onClick} className={styles.card} type="button">
      <div className={styles.cardTop}>
        <span className={styles.badge}>לוהט</span>
        <span className={styles.emoji}>✨</span>
      </div>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <p className={styles.description}>לחצי כדי לגלות בדיחה</p>
    </button>
  );
}