import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export default function JokePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageBackground}>
      <div className={styles.jokeCard}>
        <div className={styles.bigEmoji}>🍪</div>
        <h1 className={styles.jokeQuestion}>איך מתכנתת עושה דיאטה?</h1>
        <p className={styles.jokeAnswer}>היא פשוט מוחקת את ה-Cookies מהדפדפן!</p>
        
        {/* הכפתור עכשיו מנווט חזרה לדף הבית בלחיצה */}
        <button className={styles.backButton} onClick={() => navigate('/')}>
          חזרה <span>←</span>
        </button>
      </div>
    </div>
  );
}