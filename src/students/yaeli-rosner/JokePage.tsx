import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function yaeliJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.jokePage}>
      <h1 className={styles.pageTitle}>:stew: מה קרה למרק?????</h1>

      <div className={styles.storyContainer}>
        <p className={styles.narration}>אחד מגיע למסעדה, מתיישב ומזמין מרק. אחרי כמה דקות המלצר מביא לו את המנה והולך.</p>

        <p className={styles.narration}>איך שהמלצר מתרחק, הלקוח קורא לו:</p>
        <p className={styles.dialogue}><strong className={styles.character}>הלקוח:</strong> "מלצר! מלצר, בוא הנה מהר!"</p>

        <p className={styles.narration}>המלצר רץ אליו:</p>
        <p className={styles.dialogue}><strong className={styles.character}>המלצר:</strong> "כן אדוני, מה קרה? המרק קר?"</p>

        <p className={styles.dialogue}><strong className={styles.character}>הלקוח:</strong> "לא, תטעם מהמרק."</p>

        <p className={styles.dialogue}><strong className={styles.character}>המלצר המופתע:</strong> "חסר מלח? חסר פלפל?"</p>

        <p className={styles.dialogue}><strong className={styles.character}>הלקוח:</strong> "פשוט תטעם מהמרק!"</p>

        <p className={styles.dialogue}><strong className={styles.character}>המלצר:</strong> "אדוני, אני לא יכול לטעום מהמנה שלך, אבל אם משהו לא בסדר אני אחליף לך..."</p>

        <p className={styles.dialogue}><strong className={styles.character}>הלקוח מתעקש:</strong> "אני אומר לך, תטעם מהמרק!"</p>

        <p className={styles.narration}>המלצר נכנע:</p>
        <p className={styles.dialogue}><strong className={styles.character}>המלצר:</strong> "טוב, בסדר, אני אטעם. רגע... איפה הכף?"</p>

        <p className={styles.punchline}><strong className={styles.character}>הלקוח:</strong> "אההה! בשעה טובה!" :spoon:</p>
      </div>

      <button className={styles.backButton} onClick={onBack}>← חזרה לתפריט הבדיחות</button>
    </div>
  );
}