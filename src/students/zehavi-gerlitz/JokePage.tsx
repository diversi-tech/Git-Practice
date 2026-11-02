import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function zehaviJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <h1 className={styles.pageTitle}>מה מספיד בייגלה את אחיו שנאכל?</h1>
      <p className={styles.jokeAnswer}>היינו "כעכים"! 🥨😭</p>
      <button className={styles.backButton} onClick={onBack}>← חזרה</button>
    </div>
  );
}