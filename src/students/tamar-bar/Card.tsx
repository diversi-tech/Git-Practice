// src/students/tamar-bar/Card.tsx
import styles from './styles.module.css';

export default function Card() {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>תמר בר</h3>
      <p className={styles.joke}>
        למה המחשב הלך לרופא?
      </p>
      <p className={styles.punchline}>
        כי היה לו וירוס 🤒
      </p>
    </div>
  );
}