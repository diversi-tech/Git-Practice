import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function shiraGidiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>בדיחת מתכנתים</p>
      <p>"למה מחשבים לא הולכים לים? כי הם מפחדים מהגלישה!"</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}