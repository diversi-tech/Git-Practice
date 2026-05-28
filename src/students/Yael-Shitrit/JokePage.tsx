import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YaelShitritJokePage({ onBack }: PageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>באג של מתכנתים</h1>
        
        <p className={styles.jokeText}>
          מתכנת אחד הולך למכולת. אשתו אומרת לו:<br />
          <strong>"תקנה בבקשה כיכר לחם אחת, ואם יש ביצים – תקנה עשר".</strong>
          <br /><br />
          המתכנת מגיע למכולת, רואה שיש ביצים, וחוזר הביתה עם עשר כיכרי לחם.<br /><br />
          אשתו ההמומה שואלת אותו: "למה קנית עשר כיכרי לחם?!"
        </p>
        
        <div className={styles.punchline}>
          אומר הלה: "כי היו ביצים!"
        </div>

        <div className={styles.decor}>
          🥚 🍞
        </div>
      </div>
    </div>
  );
}