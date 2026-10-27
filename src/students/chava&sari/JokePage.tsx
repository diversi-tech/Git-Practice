import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ChavaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>חוה ושרי</p>
      <p>זה בדיחה AI אני מודל שפה, ולא תיכננו אותי לעזור במקרה הזה.</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}