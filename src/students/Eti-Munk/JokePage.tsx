import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function EtiMunkJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>לאכל עם כף</p>
      <p>אמא שמה לב שיוסי אוכל בידיים. "תאכל עם כף!" היא אומרת לו. "ברור שהוא יאכל עם כף," עונה לה אבא "כי אם הוא יאכל עם ק', זאת תהיה שגיאת כתיב!
</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}