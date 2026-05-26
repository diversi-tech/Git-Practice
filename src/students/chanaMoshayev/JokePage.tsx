import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ChanaMoshayevJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.card}>
        <h2 className={styles.title}>המחשב החולה</h2>
        <p className={styles.name}>למה המחשב היה צריך ללכת לרופא? כי היו לו יותר מדי וירוסים 😅</p>
        <button onClick={onBack}>← חזרה</button>
      </div>
    </div>
  );
}