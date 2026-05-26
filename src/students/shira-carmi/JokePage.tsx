import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ShiraCarmiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>למה מפתחים כל כךg אוהבים להשתמש ב-Git?</p>
      <p>כי זה המקום היחיד שבו מותר לדחוף (push) בלי לבקש סליחה!</p>
      <p>😄</p>
      <p>מקור הבדיחה: <a href="https://www.reddit.com/r/ProgrammerHumor/comments/1l5h8u/git_joke/">Reddit - Programmer Humor</a></p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}