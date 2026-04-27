import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function BatShevaBlochJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.jokePage}>
      <div className={styles.window}>
        <div className={styles.windowTitleBar}>
          <span className={`${styles.dot} ${styles["dot--red"]}`} />
          <span className={`${styles.dot} ${styles["dot--yellow"]}`} />
          <span className={`${styles.dot} ${styles["dot--green"]}`} />
          <span className={styles.windowTitle}>terminal — joke.exe</span>
        </div>
        <div className={styles.windowBody}>
          <span className={styles.line}>$ run-joke --full --student bsb</span>
          <span className={`${styles.line} ${styles["line--dim"]}`}>Loading joke... done.</span>
          <span className={`${styles.line} ${styles["line--dim"]}`}>────────────────────────────</span>
          <span className={`${styles.line} ${styles["line--bright"]}`}>Q: למה המחשב קר בחורף?</span>
          <span className={`${styles.line} ${styles["line--dim"]}`}>────────────────────────────</span>
          <span className={`${styles.line} ${styles["line--answer"]}`}>A: כי הוא השאיר את החלונות פתוחים! 🪟</span>
          <span className={`${styles.line} ${styles["line--dim"]}`}>────────────────────────────</span>
          <span className={`${styles.line} ${styles["line--exit"]}`}>exit code: 0 (success)</span>
          <span className={styles.line}>$ </span>
        </div>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        $ cd ..
      </button>
    </div>
  );
}
