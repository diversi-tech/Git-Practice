import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TamarRotanJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.jokePage}>
      <div className={styles.jokeContainer}>
        <h3 className={styles.mainTitle}>הבדיחה של תמר 🎭</h3>
        
        <div className={styles.jokeContent}>
          <p>פעם אחת אדם הגיע לראיון עבודה. <br />
          המראיין שאל אותו: "מהי התכונה הכי בולטת שלך?"</p>
          
          <p>המועמד חשב לרגע וענה: <br />
          "אני ממש טוב בלתת תשובות לשאלות מבלי לחשוף את מה שמאחורי הקלעים".</p>
          
          <p>המראיין חייך ושאל: "ומהי התכונה הכי פחות טובה שלך?"</p>
          
          <div className={styles.punchline}>
            ענה המועמד: "שאני לא יודע מתי לעצור!"
          </div>
        </div>

        <button onClick={onBack} className={styles.backButton}>
          ← חזרה לרשימה
        </button>
      </div>
    </div>
  );
}