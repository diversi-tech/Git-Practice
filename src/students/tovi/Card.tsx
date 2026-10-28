import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function TovaCard({ student, onClick }: CardProps) {
  const icon = student.id === "tovi-2" ? "🌾" : "🚲";

  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <span className={styles.action}>לבדיחה ←</span>
    </div>
  );
}
