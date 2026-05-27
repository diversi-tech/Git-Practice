import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function SheviShapiraJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <div className={styles.terminalContainer}>
        <div className={styles.terminalHeader}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.title}>bash - joke_generator.sh</span>
        </div>
        
        <div className={styles.terminalBody}>
          <div className={styles.line}>
            <span className={styles.prompt}>$</span> npm run tell-joke
          </div>
          
          <div className={styles.output}>
            <p className={styles.setup}>
              אשתו של מתכנת שולחת אותו לסופר: "תקנה כיכר לחם. ואם יש ביצים — תקנה עשרה".
            </p>
          </div>

          <div className={styles.line}>
            <span className={styles.prompt}>$</span> resolve --logic
          </div>

          <div className={styles.output}>
            <p className={styles.punchline}>
              המתכנת חוזר הביתה עם 10 כיכרות לחם. <br />
              אשתו המומה: "למה קנית עשרה כיכרות לחם?!" <br />
              המתכנת: "כי היו ביצים". 🥚🫥
            </p>
          </div>
        </div>
      </div>

      <button onClick={onBack} className={styles.cyberButton}>
        $ cd .. (Back)
      </button>
    </div>
  );
}