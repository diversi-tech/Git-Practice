import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function RachelPanetJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.jokeHeader}>
        <span className={styles.bigEmoji}>🧑🏼‍⚕️</span>
      </div>
      <div className={styles.jokeCard}>
        <h2>איש אחד מגיע לרופא ואומר לו: "דוקטור, כל הגוף שלי כואב! תראה, כשאני נוגע במצח – כואב לי, כשאני נוגע בברך – כואב לי, וכשאני נוגע בבטן – גם כואב לי!"
         " הרופא מסתכל עליו, בודק אותו דקה ואומר:."</h2>
        <h1>"הבנתי את הבעיה... האצבע שלך שבור"</h1>
      </div>
      <button className={styles.backBtn} onClick={onBack}>
        → חזרה
      </button>
    </div>
  );
}
