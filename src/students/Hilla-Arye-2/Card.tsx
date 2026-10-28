import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function HillaCard2({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <span className={styles.icon} aria-hidden="true">🧹</span>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <a className={styles.name} href="mailto:yaeli.rosner@gmail.com" onClick={(event) => event.stopPropagation()}>
        {student.name} · yaeli.rosner@gmail.com
      </a>
      <span className={styles.action}>לבדיחה ←</span>
    </div>
  );
}
