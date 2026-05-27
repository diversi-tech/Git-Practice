import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function TamarDamtiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>הבננה</p>
      <p> שני אנשים הולכים ברחוב, פתאום אחד מהם רואה קליפת בננה על המדרכה במרחק כמה מטרים קדימה.

הוא נאנח ואומר לחבר שלו: "אוף, נו באמת... עוד פעם אני הולך ליפול!" </p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}