import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ShiraJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>בננה נחמדת</p>
      <p> איש אחד הלך הלך הלך... בום, שניצל!</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}