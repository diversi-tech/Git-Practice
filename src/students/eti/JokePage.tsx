import styles from "./styles.module.css";
import { PageProps } from "../../types";


export default function EtiJokePage({ onBack }: PageProps) {
    return (
        <div className={`joke-page ${styles.jokePage}`}>
            <h2>חנות אחת תלתה שלט: "כאן מוכרים חליפות לכל סוגי העבודה"</h2>
            <h2>נכנס איש אחד ושאל את המוכר: "יש לכם חליפה בשביל מחפשי עבודה?"🤵</h2>
            <button onClick={onBack}>חזרה</button>
        </div>
    );
}