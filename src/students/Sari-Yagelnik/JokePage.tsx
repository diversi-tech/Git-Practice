import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function SariYagelnikJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>joke setup</p>
      <p>joke punchline</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}