import styles from "./styles.module.css";
import { CardProps } from "../../../types";

export default function EfratMadmonCard({ student, onClick }: CardProps) {
    return (
        <div className={`joke-card ${styles.card}`}>
            <h2 className={styles.title}>{student.jokeTitle}</h2>
            <div className={styles.cardLine}></div>
            <a className={`${styles.name} student-card-name`} href={`mailto:${student.email}`}>{student.name}</a>
      <span className="student-card-team">צוות {student.teamName}</span>
      <button className="student-card-action" type="button" onClick={onClick}>לבדיחה ←</button>
        </div>
    );
}