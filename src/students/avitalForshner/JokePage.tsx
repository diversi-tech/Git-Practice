import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function avitalJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>כרוב וכרובית</p>
      <p>מה קורה כשכרוב וכרובית מתחתנים?</p>
      <p>הם נהיים כרובי משפחה</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}