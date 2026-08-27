import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function YaelCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div className={styles.emoji}>🍕</div>
      <h2 className={styles.title}>פיצריה</h2>
      <p className={styles.name}>{student.name}</p>
    </div>
  );
}
