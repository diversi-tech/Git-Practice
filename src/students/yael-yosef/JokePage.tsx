import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YaelJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p><strong><p><strong>מכנסיים של מישהו אחר</strong></p></strong></p>
      <p>המורה: "דני, אם יש לך 5 שקלים בכיס ימין ו-5 שקלים בכיס שמאל, מה יש לך?"</p>
      <p>דני: "מכנסיים של מישהו אחר!"</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}