import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function HadasCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={styles.coffeeCard}>
      <div className={styles.cardSteamGlow}></div>
      <div className={styles.cardHeader}>
        <span className={styles.coffeeBadge}>☕ Code & Coffee</span>
        <span className={styles.emoji}>💻</span>
      </div>
      <h2 className={styles.cardTitle}>{student.jokeTitle}</h2>
      <div className={styles.cardFooter}>
        <span className={styles.authorName}>{student.name}</span>
        <span className={styles.actionText}>קחו שלוק ←</span>
      </div>
    </div>
  );
}