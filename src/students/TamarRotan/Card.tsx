import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function TamarRotanCard({ student, onClick }: CardProps) {
  return (
    <div className={`joke-card ${styles.card}`}>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <button onClick={onClick} className={styles.button}>לחצי לצחוק</button>
    </div>
  );
}