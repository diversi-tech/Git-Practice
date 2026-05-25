import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ChedvaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>😂</p>
      <p>חחחח</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}
