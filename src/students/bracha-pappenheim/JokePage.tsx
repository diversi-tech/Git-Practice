import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function brachaJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>בדיחה מאד מצחיקה  למתכנת סטלן</p>
      <p> מה קורה כשמתכנת סטלן מנסה לדאבג (Debug) קוד?
        הוא מוצא באג, בוהה בו עשר דקות, ואז אומר: "וואו אחי... בעצם, מי אמר שזו טעות? אולי זה פשוט ה-Feature של היקום..."</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}