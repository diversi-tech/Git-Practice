import styles from "./styles.module.css";
import { CardProps } from "../../types";

// שימי לב: השם שונה ל-TamarZwiebelCard כדי למנוע שגיאות
export default function TamarZwiebelCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
    </div>
  );
}