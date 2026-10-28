import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function EtiCard({ student, onClick }: CardProps) {
  return (
    <div className={`joke-card ${styles.card}`}>
      <span className={styles.icon} aria-hidden="true">🤵</span>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <a className={styles.name} href={`mailto:${student.email}`}>{student.name}</a>
      {student.teamProjectUrl ? (
        <a className={styles.team} href={student.teamProjectUrl}>צוות {student.teamName}</a>
      ) : (
        <span className={styles.team}>צוות {student.teamName}</span>
      )}
      <button className={styles.action} type="button" onClick={onClick}>לבדיחה ←</button>
    </div>
  );
}
