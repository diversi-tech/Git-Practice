import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function RachelHydeJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>Why did the programmer quit her job?</p>
      <p>Because she didn't get arrays.</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}