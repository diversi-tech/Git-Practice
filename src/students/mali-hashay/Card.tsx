import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function MaliHashayCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div className={styles.coffeeCup}>🐒</div>
      <div className={styles.steam}>❄ ❄ ❄</div>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <span className={styles.badge}>לחצי לבדיחה</span>
    </div>
  );
}
