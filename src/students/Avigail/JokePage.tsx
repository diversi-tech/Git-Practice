import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function avigailJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p> החתול המדבר</p>
      <p>ילד נכנס לחנות חיות ושואל:
"יש לכם חתול שמדבר?"

המוכר מצביע על חתול בפינה.

הילד מתקרב ושואל:
"אתה באמת יודע לדבר?"

החתול עונה:
"ברור. אפילו עבדתי פעם כסוכן חשאי."

הילד המופתע שואל:
"באמת?!"

החתול אומר:
"כן, טיילתי בכל העולם, האזנתי לשיחות סודיות ואף אחד לא חשד בי כי הייתי רק חתול."

הילד רץ למוכר:
"וואו! למה אתם מוכרים חתול כזה מיוחד?"

המוכר מחייך ואומר:
"כי הוא ממציא סיפורים כל היום..." 😸</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}
