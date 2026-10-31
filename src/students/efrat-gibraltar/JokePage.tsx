import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function EfratGibraltarJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>הרופא אומר למטופל: "יש לי חדשות רעות וחדשות רעות."</p>
      <p>
        "הרעות: נשארו לך 24 שעות לחיות. הרעות יותר: שכחתי להגיד לך את זה אתמול."
      </p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}