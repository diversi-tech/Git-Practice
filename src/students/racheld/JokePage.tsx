import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function RachelDJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>מתכנת מגיע נסער למנהל הצוות שלו ואומר: "אני לא מבין למה הלקוח מתלונן שהמערכת קורסת! במחשב שלי הכל עובד מצוין!"</p>
      <p>מנהל הצוות מביט בו, מחייך ואומר: "מעולה, אז בוא פשוט נספק ללקוח את המחשב שלך..."</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}

