import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function MaayanCard({ student, onClick }: CardProps) {
  return (
    <div className={`joke-card ${styles.card}`}>
      <div className={styles.avatar}>🖥️</div>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <a className={styles.name} href={`mailto:${student.email}`}>
        {student.name}
      </a>
      {student.teamProjectUrl ? (
        <a className={styles.team} href={student.teamProjectUrl}>
          צוות {student.teamName}
        </a>
      ) : (
        <span className={styles.team}>צוות {student.teamName}</span>
      )}
      <button className={styles.badge} type="button" onClick={onClick}>לבדיחה ←</button>
    </div>
  );
}
