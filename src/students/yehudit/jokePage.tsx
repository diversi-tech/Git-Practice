import { PageProps } from "../../types";
import styles from "./styles.module.css";

export default function JokePage({ onBack }: PageProps) {
  return (
    <main className={styles.jokePage}>
      <section className={styles.coffeePanel}>
        <div className={styles.coffeeHeader}>
          <div>
            <h1>בדיחה חמה כמו קפה</h1>
            
          </div>
          <span className={styles.marker}>☕️</span>
        </div>

        <div className={styles.coffeeStage}>
          <div className={styles.cupWrapper}>
            <div className={styles.steam} />
            <div className={styles.cup}>
              <div className={styles.cupLiquid} />
            </div>
            <div className={styles.saucer} />
          </div>
          
        </div>

        <div className={styles.jokeText}>
          <p>
            אדם אחד מגיע לרופא המשפחה שלו ומספר לו בדאגה: "דוקטור, יש לי בעיה חמורה.
            כל פעם שאני שותה כוס קפה, אני מרגיש דקירה חדה וכואבת מאוד בעין ימין. מה זה יכול להיות?"
          </p>
          <p>
            הרופא מביט בו במבט רציני, חושב לרגע ואומר: "תשמע, לפי האבחנה שלי, הפתרון פשוט מאוד..."
          </p>
          <p>
            "באמת?!" שמח המטופל, "מה צריך לעשות?"
          </p>
          <p>
            הרופא משיב: "בפעם הבאה שאתה שותה קפה, פשוט תוציא את הכפית מהכוס."
          </p>
        </div>

        <button className={styles.backBtn} onClick={onBack} type="button">
          חזרה
        </button>
      </section>
    </main>
  );
}