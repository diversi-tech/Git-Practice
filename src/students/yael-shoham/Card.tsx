import React from 'react';
import styles from './styles.module.css';

interface CardProps {
  onClick: () => void;
}

export default function YaelCard({ student, onClick }: any) {  return (
    <div className={styles.cardContainer} onClick={onClick}>
      {/* אייקון עליון */}
      <div className={styles.iconBubble}>
        👦💬
      </div>

      {/* כותרת ותת כותרת */}
      <h3 className={styles.cardTitle}>הילד המדבר</h3>
      
      <div className={styles.authorBadge}>
        <span>יעל שהם</span>
      </div>

      {/* כפתור לחיצה דקורטיבי */}
      <button className={styles.actionButton}>
        לחץ לצחוק ✨
      </button>
    </div>
  );
};