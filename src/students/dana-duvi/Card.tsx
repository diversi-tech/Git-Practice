import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function DanaDuviCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div className={styles.avatar}>🐻</div>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <span className={styles.badge}>לחצי לצחוק</span>
    </div>
  );
}
