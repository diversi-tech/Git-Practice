import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function NoaMegeraCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <span className={styles.bee2}>🐞</span>
      <span className={styles.bee3}>🐞</span>
    </div>
  );
}
