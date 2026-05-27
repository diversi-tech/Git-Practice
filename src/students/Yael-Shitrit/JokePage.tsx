import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YaelShitritJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>מתכנת אחד הולך למכולת. אשתו אומרת לו:
"תקנה בבקשה כיכר לחם אחת, ואם יש ביצים – תקנה עשר".

המתכנת מגיע למכולת, רואה שיש ביצים, וחוזר הביתה עם 10 כיכרי לחם.

אשתו ההמומה שואלת אותו: "למה קנית עשר כיכרי לחם?!"
אומר הלה: "כי היו ביצים!"</p>
      <button onClick={onBack}>← חזרה לעמוד הראשי</button>
    </div>
  );
}