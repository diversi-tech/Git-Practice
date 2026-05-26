import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function RuthCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <span className={styles.web} aria-hidden="true" />
      <span className={styles.spider} aria-hidden="true" />
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
    </div>
  );
}