import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function ChaniChanzinCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={`joke-card ${styles.card}`}>
      <div className={styles.scoreBar}>
        <span>HI&nbsp;00847</span>
        <span>00000</span>
      </div>
      <div className={styles.scene}>
        <div className={styles.dinoWrapper}>
          <div className={styles.dinoPixel} />
          <div className={styles.dinoEye} />
        </div>
        <div className={styles.ground} />
      </div>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
      <p className={styles.press}>— PRESS TO PLAY —</p>
    </div>
  );
}
