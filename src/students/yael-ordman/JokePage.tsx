import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YaelOrdmanJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>מה ההגדרה המילונית של רקורסיה?</p>
      <p>עיין ערך רקורסיה...</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}