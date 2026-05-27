import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function NechamiCard({ student, onClick }: CardProps) {
  return (
<div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
        👨‍💻✨
      </div>

      <h2 className={styles.title}>
        {student.jokeTitle}
      </h2>
      
      <div className={styles.name}>
        <span>👤 {student.name}</span>
      </div>
    </div>
  );
}