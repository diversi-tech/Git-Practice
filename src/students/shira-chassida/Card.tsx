import React from 'react';
import styles from './styles.module.css';

interface CardProps {
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.cardHeader}>
        <div className={styles.moleWrapper}>
          <svg className={styles.moleSvg} viewBox="0 0 120 100">
            <ellipse cx="60" cy="72" rx="42" ry="14" fill="#DFE3EA" />
            <ellipse cx="60" cy="72" rx="36" ry="10" fill="#202330" />
            
            <g className={styles.moleBody}>
              <path d="M 38 72 C 38 35, 82 35, 82 72 Z" fill="#3F4354" />
              <circle cx="53" cy="50" r="3.5" fill="#FFFFFF" />
              <circle cx="53" cy="50" r="1.5" fill="#202330" />
              <circle cx="67" cy="50" r="3.5" fill="#FFFFFF" />
              <circle cx="67" cy="50" r="1.5" fill="#202330" />
              <ellipse cx="60" cy="56" rx="4.5" ry="3.5" fill="#FF5E62" />
              <ellipse cx="43" cy="63" rx="4" ry="2.5" fill="#FFC837" />
              <ellipse cx="77" cy="63" rx="4" ry="2.5" fill="#FFC837" />
            </g>
          </svg>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>החפרפרת</h2>
        <div className={styles.cardAuthor}>שירה חסידה</div>
      </div>

      <div className={styles.cardFooter}>
        <button className={styles.actionBtn}>
          ✦ לצפייה בבדיחה
        </button>
      </div>
    </div>
  );
};

export default Card;