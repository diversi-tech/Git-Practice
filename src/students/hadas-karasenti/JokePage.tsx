import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function HadasKarasentiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.screen}>
        <div className={`${styles.screenContent} ${styles.screenDead}`}>
          <div className={styles.virusWrapper}>
            <div className={styles.virusPixel} />
          </div>
          <p className={styles.bsod}>FATAL ERROR: 0x000_LOL</p>
        </div>
      </div>
      <div className={styles.jokeBox}>
        <p className={styles.jokeSetup}>למה המחשב הלך לרופא?</p>
        <p className={styles.jokePunchline}>כי היה לו וירוס!</p>
        <p className={styles.emoji}>🦠💻🩺</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        ↺&nbsp;back
      </button>
    </div>
  );
}
