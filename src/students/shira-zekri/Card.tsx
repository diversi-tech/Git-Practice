import React from 'react';
import styles from './styles.module.css';

interface CardProps {
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.iconCircle}>
        <span className={styles.fishEmoji}>🐠</span>
      </div>

      <div className={styles.cardInfo}>
        <h2 className={styles.cardTitle}>הדג</h2>
        <p className={styles.cardAuthor}>מאת שירה זכרי</p>
      </div>

      <button className={styles.exploreBtn}>
        צלול פנימה ➔
      </button>
    </div>
  );
};

export default Card;