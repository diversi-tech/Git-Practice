import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function HadarJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>ההבדל קטן</p>
      <p>אשתו של מתכנת מבקשת ממנו: "תקפוץ רגע למכולת, תקנה כיכר לחם. אה, ואם יש ביצים – תביא עשר".

אחרי חצי שעה המתכנת חוזר הביתה עם 10 כיכרות לחם.

אשתו המומה: "למה קנית עשר כיכרות לחם?!"

המתכנת עונה: "כי היו ביצים".</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}