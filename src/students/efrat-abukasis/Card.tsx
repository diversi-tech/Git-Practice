import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function EfratAbukasisCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={styles.card}>
      <div className={styles.cardIcon}>💻</div>
      <h2 className={styles.cardTitle}>{student.jokeTitle}</h2>
      <p style={{ color: '#64748b' }}>{student.name}</p>
    </div>
  );
}