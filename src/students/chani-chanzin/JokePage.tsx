import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ChaniChanzinJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={`${styles.scene} ${styles.sceneDead}`}>
        <div className={`${styles.dinoWrapper} ${styles.dinoDead}`}>
          <div className={styles.dinoPixel} />
          <div className={styles.dinoEye} />
          <div className={styles.dinoX}>x</div>
        </div>
        <div className={styles.ground} />
      </div>
      <div className={styles.jokeBox}>
        <p className={styles.jokeSetup}>לאן הולכים התנין והתנינה?</p>
        <p className={styles.jokePunchline}>לבקר תנינים! 🐊</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        ↺&nbsp;back
      </button>
    </div>
  );
}
