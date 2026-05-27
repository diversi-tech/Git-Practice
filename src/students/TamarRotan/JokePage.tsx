import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TamarRotanJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>פעם אחת אדם הגיע לראיון עבודה. המראיין שאל אותו: "מהי התכונה הכי בולטת שלך?"
המועמד חשב לרגע וענה: "אני ממש טוב בלתת תשובות לשאלות מבלי לחשוף את מה שמאחורי הקלעים".
המראיין חייך ושאל: "ומהי התכונה הכי פחות טובה שלך?"
המועמד ענה: "שאני לא יודע מתי לעצור".</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}