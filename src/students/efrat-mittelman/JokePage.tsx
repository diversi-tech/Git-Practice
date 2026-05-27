import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function EfratMittelmanJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <h1 className={styles.jokeTitle}>למה המחשב הלך לרופא?</h1>
      <p className={styles.jokeAnswer}>כי היה לו וירוס 😄</p>
      
      <button className={styles.backButton} onClick={onBack}>
        ← חזרה למסך הראשי
      </button>
    </div>
  );
}