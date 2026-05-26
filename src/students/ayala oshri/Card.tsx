import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function MyCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      {/* Decorative bubbles */}
      <span className={styles.bubble} style={{ top: "10%", left: "8%", width: 18, height: 18 }} />
      <span className={styles.bubble} style={{ top: "20%", right: "12%", width: 12, height: 12 }} />
      <span className={styles.bubble} style={{ bottom: "18%", left: "18%", width: 22, height: 22 }} />
      <span className={styles.bubble} style={{ bottom: "10%", right: "8%", width: 10, height: 10 }} />

      {/* Duck icon */}
      <div className={styles.duckIcon}>🛁</div>

      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>

      <div className={styles.cardFooter}>
        <span className={styles.clickHint}>לחץ לצחוק 🫧</span>
      </div>
    </div>
  );
}