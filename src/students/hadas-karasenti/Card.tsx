import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function HadasKarasentiCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div className={styles.topBar}>
        <span className={styles.led} />
        <span className={styles.led} />
        <span className={styles.led} />
      </div>
      <div className={styles.screen}>
        <div className={styles.screenContent}>
          <div className={styles.virusWrapper}>
            <div className={styles.virusPixel} />
          </div>
          <p className={styles.screenText}>VIRUS DETECTED</p>
        </div>
      </div>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <p className={styles.press}>— PRESS TO PLAY —</p>
    </div>
  );
}
