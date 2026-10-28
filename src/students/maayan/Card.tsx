import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function MaayanCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div className={styles.avatar}>🖥️</div>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <a className={styles.name} href={`mailto:${student.email}`} onClick={(event) => event.stopPropagation()}>
        {student.name}
      </a>
      {student.teamProjectUrl ? (
        <a className={styles.team} href={student.teamProjectUrl} onClick={(event) => event.stopPropagation()}>
          צוות {student.teamName}
        </a>
      ) : (
        <span className={styles.team}>צוות {student.teamName}</span>
      )}
      <span className={styles.badge}>לחצי לצחוק</span>
    </div>
  );
}
