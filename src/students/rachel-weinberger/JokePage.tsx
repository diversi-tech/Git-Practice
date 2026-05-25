import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function RachelWeinbergerJokePage({ onBack }: PageProps) {
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
        <p className={styles.jokeSetup}>אדם אחד מגיע לרופא ומלין: "דוקטור, כל פעם שאני שותה כוס תה, כואבת לי העין ימין באופן נוראי!"</p>
        <p className={styles.jokePunchline}>הרופא חושב קצת, מביט בו ואומר: "ניסית אולי להוציא את הכפית מהכוס לפני שאתה שותה?"</p>
        <p >🧑‍⚕️👨‍⚕️👩‍⚕️</p>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        ↺&nbsp;back
      </button>
    </div>
  );
}
