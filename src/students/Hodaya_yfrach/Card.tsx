import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function HodayaYfrachCard({ student, onClick }: CardProps) {
  // תמיכה בניווט מקלדת - הפעלת הלחיצה גם עם Enter או מקש רווח
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article 
      onClick={onClick} 
      onKeyDown={handleKeyDown}
      className={`joke-card ${styles.clickableCard}`}
      role="button"
      tabIndex={0}
      aria-label={`בדיחה של ${student.name}`}
    >
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      {/* אימוג'י הוא אלמנט דקורטיבי, לכן מוסתר מקוראי מסך */}
      <div className={styles.emoji} aria-hidden="true">🤔</div>
    </article>
  );
}