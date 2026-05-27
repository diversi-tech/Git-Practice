import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function SheviShapiraCard({ onClick }: CardProps) {
  return (
    <div onClick={onClick} className={styles.card}>
      <div className={styles.cardTitleWithIcon}>
        <span>🛒</span>
        <span>אלגוריתם בסופרמרקט</span>
      </div>
      <div className={styles.name}>שבי שפירא</div>
    </div>
  );
}