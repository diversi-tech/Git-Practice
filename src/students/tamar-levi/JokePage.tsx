import styles from './styles.module.css';

export default function JokePage() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.jokeCard}>
        <div className={styles.bigEmoji}>🍪</div>
        <h1 className={styles.jokeQuestion}>איך מתכנתת עושה דיאטה?</h1>
        <p className={styles.jokeAnswer}>היא פשוט מוחקת את ה-Cookies מהדפדפן!</p>
        <button className={styles.backButton}>
          חזרה <span>←</span>
        </button>
      </div>
    </div>
  );
}