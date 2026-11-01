// src/students/tamar-bar/JokePage.tsx
import styles from './styles.module.css';

export default function JokePage() {
  return (
    <div className={styles.page}>
      <h2>הבדיחה של תמר בר</h2>
      <p>למה המחשב הלך לרופא?</p>
      <p className={styles.punchline}>כי היה לו וירוס 🤒</p>
    </div>
  );
}