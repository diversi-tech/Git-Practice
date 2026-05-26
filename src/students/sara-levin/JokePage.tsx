import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function MyJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        אמא של מתכנת שלחה אותו לסופר: "תקנה כיכר לחם, ואם יש ביצים – תקנה עשר".
      </p>
      <p>
        הוא חזר הביתה עם 10 כיכרות לחם. <br />
        כששאלה אותו למה, הוא ענה: "כי היו ביצים". 🥚
      </p>
      <button onClick={onBack}>←אחורה חזרה</button>
      
    </div>
  );
}