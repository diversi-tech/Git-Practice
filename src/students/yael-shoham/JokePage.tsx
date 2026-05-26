import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YaelJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p> מדוע לדבר לעצמי?</p>
      <p>אמא שואלת את הילד: "למה אתה מדבר עם עצמך?"
      הילד עונה: "כי אני היחיד שמבין אותי."
       אמא: "טוב, לפחות דבר עם מישהו חכם." </p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}