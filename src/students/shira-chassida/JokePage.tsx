import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface JokePageProps {
  onBack: () => void;
}

export const JokePage: React.FC<JokePageProps> = ({ onBack }) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // קפיצה ראשונית מעלה עם הטעינה
    const timer = setTimeout(() => {
      setIsHidden(false);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.jokePageWrapper}>
      <div 
        className={styles.jokeContentCard}
        onClick={() => setIsHidden(!isHidden)}
      >
        <div className={styles.interactiveHoleArea}>
          <svg className={styles.holeSvg} viewBox="0 0 140 110">
            <g className={styles.starsGroup}>
              <path d="M 35 22 L 37 28 L 43 28 L 38 32 L 40 38 L 35 34 L 30 38 L 32 32 L 27 28 L 33 28 Z" fill="#FFC837" />
              <path d="M 105 18 L 106.5 22.5 L 111 22.5 L 107.5 25.5 L 109 30 L 105 27 L 101 30 L 102.5 25.5 L 99 22.5 L 103.5 22.5 Z" fill="#FFC837" />
            </g>

            {/* טווח תנועה מדויק: עולה קצת יותר גבוה החוצה (-8px) ויורד למטה לתוך המחילה (22px) */}
            <g 
              style={{
                transform: isHidden ? 'translateY(22px)' : 'translateY(-8px)',
                transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transformOrigin: 'bottom center'
              }}
            >
              <path d="M 48 80 C 48 42, 92 42, 92 80 Z" fill="#3F4354" />
              <circle cx="63" cy="57" r="3.5" fill="#FFFFFF" />
              <circle cx="63" cy="57" r="1.5" fill="#202330" />
              <circle cx="77" cy="57" r="3.5" fill="#FFFFFF" />
              <circle cx="77" cy="57" r="1.5" fill="#202330" />
              <ellipse cx="70" cy="63" rx="4.5" ry="3.5" fill="#FF5E62" />
              <ellipse cx="53" cy="70" rx="4" ry="2.5" fill="#FFC837" />
              <ellipse cx="87" cy="70" rx="4" ry="2.5" fill="#FFC837" />
            </g>

            {/* שפת המחילה מקדימה */}
            <ellipse cx="70" cy="80" rx="44" ry="14" fill="#DFE3EA" />
            <ellipse cx="70" cy="80" rx="38" ry="10" fill="#202330" />
          </svg>
        </div>

        <div className={styles.hintText}>
          {isHidden ? '🐾 לחצי כדי להוציא את החפרפרת' : '🐾 לחצי כדי להחביא את החפרפרת'}
        </div>

        <h1 className={styles.questionText}>למה תמיד סולחים לחפרפרת?</h1>
        
        <div className={styles.dividerLine} />

        <div className={styles.answerText}>
          כי היא תמיד מבקשת מחילה!
        </div>
      </div>

      <button className={styles.backButton} onClick={onBack}>
        ↺ חזרה
      </button>
    </div>
  );
};

export default JokePage;