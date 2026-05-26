import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ShiraCarmiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>למה מפתחים כל כךg אוהבים להשתמש ב-Git?</p>
      <p>כי זה המקום היחיד שבו מותר לדחוף (push) בלי לבקש סליחה!</p>
      <p>😄</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}