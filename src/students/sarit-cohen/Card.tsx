import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function SaritCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={styles.card}>
      <div className={styles.scoreBar}>
        <span>HI 00847</span>
        <span>00000</span>
      </div>
      
      <h2 className={styles.title}>{student.jokeTitle || "אופרת סבון"}</h2>
      <p className={styles.name}>{student.name}</p>

      {/* אימוג'י אמבטיה קטן לכרטיס */}
      <div className={styles.scene}>
        <div className={styles.emojiContainerSmall}>
          <span>🛁🫧</span>
        </div>
        <div className={styles.ground}></div>
      </div>
    </div>
  );
}
