import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function YWeissCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      {/* סרגל עליון של חלון מערכת */}
      <div className={styles.windowHeader}>
        <div className={styles.dots}>
          <span className={styles.dotRed}></span>
          <span className={styles.dotYellow}></span>
          <span className={styles.dotGreen}></span>
        </div>
        <span className={styles.windowTitle}>system_error.log</span>
      </div>

      {/* תוכן הכרטיסייה */}
      <div className={styles.cardBody}>
        <div className={styles.codeIcon}>💻</div>
        <h2 className={styles.title}>{student.jokeTitle}</h2>
        <p className={styles.name}>{student.name}</p>
        <div className={styles.actionBadge}>RUN CODE ▶</div>
      </div>
    </div>
  );
}