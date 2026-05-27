import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YaelJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>למה המתכנת לקח מטרייה למשרד?</p>
      <p>כי אמרו לו שיש סיכוי ל־Cloud 😄</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}