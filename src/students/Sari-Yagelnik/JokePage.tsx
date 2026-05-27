import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function SariYagelnikJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>joke setup</p>
      <p>יש 10 סוגים של אנשים בעולם:
      אלו שמבינים קוד בינארי, ואלו שלא. 😉</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}