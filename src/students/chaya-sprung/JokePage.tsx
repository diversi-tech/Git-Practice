import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ChayaSprungJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <h1>בדיקת ראיה</h1 >
      <p> חולה אומר לרופא: "דוקטור, אני חושב שאני צריך משקפיים."
עונה לו הרופא: "אתה בהחלט צריך... זה בנק, לא מרפאה."</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}