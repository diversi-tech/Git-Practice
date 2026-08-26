import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function AvitalZakJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>למה המחשב הלך לרופא?</p>
      <p>כי היה לו וירוס! 😄</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}