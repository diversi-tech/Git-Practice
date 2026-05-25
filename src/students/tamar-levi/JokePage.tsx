import styles from './styles.module.css';

export const JokePage = () => {
  return (
    <div className={styles.pageBackground}> {/* זה הרקע הכחול הגדול */}
      
      {/* תחילת הכרטיס הלבן המגניב */}
      <div className={styles.jokeCard}>
        
        <div className={styles.bigEmoji}>🍪</div>

        <h1 className={styles.jokeQuestion}>
          איך מתכנתת עושה דיאטה?
        </h1>
        
        <p className={styles.jokeAnswer}>
          היא פשוט מוחקת את ה-Cookies מהדפדפן! 🍪
        </p>

        {/* פה יהיה כפתור החזרה המעוצב */}
        <button className={styles.backButton}>
          חזרה <span>←</span>
        </button>

      </div>
      {/* סוף הכרטיס */}

    </div>
  );
};