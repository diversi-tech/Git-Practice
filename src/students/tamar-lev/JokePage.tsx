import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TamarJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>למה מתכנתים מעדיפים מצב חשוך?</p>
      <p>כי האור מושך באגים!</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}