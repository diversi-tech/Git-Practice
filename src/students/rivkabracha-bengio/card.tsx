import styles from "./styles.module.css";
import { CardProps } from "../../types";

// מציג את כרטיס הבדיחה של רבקה.
export default function RivkaBengioCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div className={styles.cup} aria-hidden="true">☕</div>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <span className={styles.badge}>לחצי לבדיחה</span>
    </div>
  );
}
