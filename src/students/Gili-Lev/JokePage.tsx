import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function GiliJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>תלמיד אחד מגיע לבית הספר בריצה ובנשימה שחוקה, חצי שעה אחרי שהתחיל  השיעור.</p>
      <p>המורה כועסת ואומרת לו: "אתה יודע שאתה מאחר?!! היית צריך להיות כאן כבר בשמונה!"</p>
      <p>עונה לה התלמיד:    "למה? מה קרה בשמונה?" 🏃‍♂️</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}
