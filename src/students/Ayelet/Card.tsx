import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function AyeletCard({ student, onClick }: CardProps) {
  const currentStudent = student || {
    name: "איילת",
    jokeTitle: "איך מתכנתים מגיבים כשהקוד שלהם לא עובד? (4 שלבי התגובה הרשמיים)"
  };

  return (
    <div onClick={onClick} className={styles.card}>
      {/* אייקון מנצנץ שמתאים לנושא הקוד והבאגים */}
      <div className={styles.iconWrapper}>💻🐛</div>
      
      <h2 className={styles.title}>{currentStudent.jokeTitle}</h2>
      <span className={styles.name}>👨‍💻 {currentStudent.name}</span>
    </div>
  );
}