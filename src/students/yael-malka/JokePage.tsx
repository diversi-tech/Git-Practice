import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YaelJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p> מורה שואלת תלמיד:</p>
      <p>
"אם יש לך 10 שקלים ואתה מבקש מאמא עוד 10 — כמה יש לך?"<br/>
התלמיד עונה: "10."<br/>
המורה: "אתה לא יודע חשבון?"<br/>
התלמיד: "את לא מכירה את אמא שלי..." 😄</p><br/>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}