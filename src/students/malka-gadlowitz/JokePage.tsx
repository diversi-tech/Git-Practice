import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function MalkaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
    <p> למה מתכנתים שותים קפה?
      כי בלי Java הם לא רצים.
    </p>
   
      <button onClick={onBack}>← Back</button>
    </div>
  );
}