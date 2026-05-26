import styles from "./styles.module.css";
import { PageProps } from "../../types";


export default function yaelihainJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
    
      <p>למה מתכנתים מעדיפים להשתמש במצב כהה (Dark Mode)?

כי אור מושך באגים. 😉</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}