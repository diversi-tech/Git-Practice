import { CardProps } from "../../types";
import styles from "./styles.module.css";

export default function Card({ student, onClick }: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardHeader}>
        <span className={styles.emoji}>💡</span>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{student.name}</h3>
        <p className={styles.jokeTitle}>{student.jokeTitle}</p>
      </div>
      <div className={styles.cardFooter}>
        <button className={styles.readButton}>קרא בדיחה</button>
      </div>
    </div>
  );
}
