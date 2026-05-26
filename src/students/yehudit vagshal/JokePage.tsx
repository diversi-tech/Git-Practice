import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function yehuditJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>החלטתי לשים את השעון המעורר שלי בצד השני של החדר, כדי שאהיה חייבת לקום כדי לכבות אותו...</p>
<p>עכשיו יש לי גם שמיכה וכרית בצד השני של החד!!!ר. 🛌</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}