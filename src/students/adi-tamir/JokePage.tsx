import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function AdiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>למה הדג שותק</p>
      <p> כי אם הוא יפתח את הפה יכנסו לו מים </p>
      <button onClick={onBack}>חזרה</button>
    </div>
  );
}