import styles from "./styles.module.css";

export default function YaelCard({ onClick }: any) {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.iconBubble}>
        👦
      </div>

      <h3 className={styles.cardTitle}>הילד המדבר</h3>
      
      <div className={styles.authorBadge}>
        <span>יעל שהם</span>
      </div>

      <button className={styles.actionButton}>
        לקרוא בדיחה ✨
      </button>
    </div>
  );
}