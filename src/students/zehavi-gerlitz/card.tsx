import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function zehaviCard({ student, onClick }: CardProps) {
  return (
<div onClick={onClick} className={`joke-card ${styles.card}`}>
      {/* אמוג'י בייגלה עליון מרכזי */}
      <div className={styles.emojiContainer}>🥨</div>
      
      {/* תוכן הכרטיס המגיע מה-props */}
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      
      {/* כפתור דקורטיבי שמתאים לעיצוב של הדוב */}
      <button className={styles.button}>לחצי לצחוק</button>
    </div>
  );
}