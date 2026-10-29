import styles from "./styles.module.css";
import { CardProps } from "../../../types";

export default function yaeliCard({ student, onClick }: CardProps) {
  return (
    <div className={`${styles.card} joke-card`}>
      {/* אזור האנימציה של המסעדה */}
      <div className={styles.restaurantScene}>
        {/* שימוש באימוג'ים אמיתיים במקום טקסט עם נקודתיים */}
        <span className={`${styles.actor} ${styles.waiter}`}>🤵</span>
        <span className={`${styles.actor} ${styles.soup}`}>🍲</span>
        <span className={`${styles.actor} ${styles.customer}`}>🙋‍♂️</span>
      </div>

      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <a className={`${styles.name} student-card-name`} href={`mailto:${student.email}`}>{student.name}</a>
      <span className="student-card-team">צוות {student.teamName}</span>
      <button className="student-card-action" type="button" onClick={onClick}>לבדיחה ←</button>
    </div>
  );
}