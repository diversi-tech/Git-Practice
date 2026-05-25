import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function NoaGabayJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>יש 10 סוגים של אנשים בעולם:</p>
      <p>אלו שמבינים קוד בינארי, ואלו שלא. 🤓</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}