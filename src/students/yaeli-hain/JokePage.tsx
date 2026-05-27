import styles from "./styles.module.css";
import { PageProps } from "../../types";


export default function yaelihainJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
    
      <p>למה מתכנתים אוהבים להשתמש במצב לילה (Dark Mode)?

            כי אור מושך באגים. 😉</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}