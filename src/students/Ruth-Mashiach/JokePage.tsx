import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function RuthJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>משבר זהות ברשת </p>
      <p>לא משנה כמה עכביש יהיה מתכנת מוכשר, הוא תמיד ימצא באגים ברשת. </p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}