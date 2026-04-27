import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function BatShevaBlochCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div className={styles.titleBar}>
        <span className={`${styles.dot} ${styles["dot--red"]}`} />
        <span className={`${styles.dot} ${styles["dot--yellow"]}`} />
        <span className={`${styles.dot} ${styles["dot--green"]}`} />
        <span className={styles.titleBarLabel}>joke.exe</span>
      </div>
      <div className={styles.body}>
        <span className={styles.prompt}>$ run-joke --student bsb</span>
        <span className={styles.title}>{student.jokeTitle}</span>
        <span className={styles.name}>{student.name}</span>
        <span className={styles.cursor}>$ </span>
      </div>
    </div>
  );
}
