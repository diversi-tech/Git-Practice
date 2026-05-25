import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function efratCard({ student, onClick }: CardProps)
{
  return (
    <div onClick={onClick} className={styles.card}>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <br></br>
      <p className={styles.name}>{student.name}</p>
      <br></br>
      <h1 >😉</h1>
    </div>
  );
}