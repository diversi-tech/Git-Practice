import React from 'react';
import styles from './styles.module.css';

interface JokePageProps {
  onBack: () => void;
}

export const JokePage: React.FC<JokePageProps> = ({ onBack }) => {
  return (
    <div className={styles.jokePageWrapper}>
      <div className={styles.jokeCard}>
        <div className={styles.topIcon}>🌊</div>
        
        <h3 className={styles.questionLabel}>החידה היומית</h3>
        <p className={styles.questionText}>למה דג לא משחק כדורגל?</p>
        
        <div className={styles.punchlineBox}>
          <span className={styles.answerTitle}>התשובה:</span>
          <p className={styles.answerText}>כי הוא מפחד מהרשת! ⚽</p>
        </div>

        <button className={styles.backButton} onClick={onBack}>
          ← חזרה לכל הבדיחות
        </button>
      </div>
    </div>
  );
};

export default JokePage;