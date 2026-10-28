import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function HillaCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <span className={styles.icon} aria-hidden="true">🌙</span>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <span className={styles.action}>לבדיחה ←</span>
    </div>
  );
}
