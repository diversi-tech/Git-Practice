import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TehilaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>זה לא אני, זה ה-merge</p>
      <p>חחחח</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}