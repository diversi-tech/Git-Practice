import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function EfratMadmonJokePage({ onBack }: PageProps) {
    return (
        <div className={`joke-page ${styles.jokePage}`}>
            {/* כרטיס הבדיחה הלבן שמופיע במרכז המסך */}
            <div className={styles.jokeCard}>
                <h2 className={styles.jokeTitle}>עשרה שקלים</h2>
                <p className={styles.jokeContent}>
                    איש אחד הולך ברחוב ורואה אדם יושב על המדרכה ומחזיק שלט: "אנא עזרו לי, חסרים לי 10 שקלים לאוטובוס הביתה".
                    <br /><br />
                    האיש מרחם עליו, מוציא שטר של 50 שקלים, נותן לו ואומר: "הנה, קח 50 שקלים ותביא איתך עוד ארבעה חברים!"
                </p>
            </div>
            
            {/* כפתור חזרה מעוגל ונקי */}
            <button onClick={onBack} className={styles.backBtn}>
                חזרה ←
            </button>
        </div>
    );
}