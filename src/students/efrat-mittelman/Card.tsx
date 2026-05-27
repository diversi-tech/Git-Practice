import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function EfratMittelmanCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.author}>מאת: {student.name}</p>
    </div>
  );
}