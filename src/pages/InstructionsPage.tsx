import { useNavigate } from "react-router-dom";

export default function InstructionsPage() {
  const navigate = useNavigate();

  return (
    <div className="instructions-page">
      <button className="instructions-back-btn" onClick={() => navigate(-1)}>
        → חזרה
      </button>

      <div className="instructions-container">
        <h1 className="instructions-title">📋 הוראות הפרויקט</h1>

        {/* Branch hierarchy */}
        <section className="instructions-section">
          <h2>🌿 היררכיית הבראנצ'ים</h2>
          <p className="instructions-intro">
            כל עבודה נעשית בבראנץ' נפרד. המיזוגים עוברים לפי הסדר הבא, מלמטה למעלה:
          </p>
          <div className="branch-tree">
            <div className="branch-level branch-main">
              <span className="branch-icon">🌳</span>
              <code>main</code>
              <span className="branch-desc">הבראנץ' הראשי — הגרסה הסופית</span>
            </div>
            <div className="branch-connector">↑ merge</div>
            <div className="branch-level branch-team">
              <span className="branch-icon">👥</span>
              <code>[שם-צוות]</code>
              <span className="branch-desc">בראנץ' צוות</span>
            </div>
            <div className="branch-connector">↑ merge</div>
            <div className="branch-level branch-subteam">
              <span className="branch-icon">🤝</span>
              <code>[שם-צוות]/[שם-תת-צוות]</code>
              <span className="branch-desc">בראנץ' תת-צוות</span>
            </div>
            <div className="branch-connector">↑ merge</div>
            <div className="branch-level branch-student">
              <span className="branch-icon">🙋</span>
              <code>[שם-צוות]/[שם-תת-צוות]/[שם-שלי]</code>
              <span className="branch-desc">הבראנץ' האישי שלך</span>
            </div>
          </div>
          <div className="branch-rule">
            <strong>⚠️ חוק ברזל:</strong> יוצרים בראנץ' חדש תמיד מהבראנץ' שמעליך בהיררכיה, לא מ-main ישירות.
          </div>
        </section>

        {/* Steps */}
        <section className="instructions-section">
          <h2>🚀 שלבי הוספת הבדיחה שלך</h2>
          <ol className="instructions-steps">
            <li>
              <strong>צרי בראנץ' אישי</strong> מהבראנץ' של התת-צוות שלך:
              <pre>{`git checkout [שם-צוות]/[שם-תת-צוות]\ngit pull\ngit checkout -b [שם-צוות]/[שם-תת-צוות]/[שם-שלי]`}</pre>
            </li>
            <li>
              <strong>צרי תיקייה אישית</strong> בנתיב:
              <pre>{`src/students/[שם-שלי-באנגלית]/`}</pre>
            </li>
            <li>
              <strong>צרי 3 קבצים</strong> בתוך התיקייה:
              <div className="file-list">
                <div className="file-item">
                  <code>Card.tsx</code>
                  <span>כרטיסיית הבדיחה שמופיעה בדף הבית</span>
                </div>
                <div className="file-item">
                  <code>JokePage.tsx</code>
                  <span>עמוד הבדיחה המלא</span>
                </div>
                <div className="file-item">
                  <code>styles.module.css</code>
                  <span>עיצוב אישי</span>
                </div>
              </div>
            </li>
            <li>
              <strong>Card.tsx</strong> — מבנה בסיסי:
              <pre>{`import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function [שמך]Card({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} className={\`joke-card \${styles.card}\`}>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <p className={styles.name}>{student.name}</p>
    </div>
  );
}`}</pre>
            </li>
            <li>
              <strong>JokePage.tsx</strong> — מבנה בסיסי:
              <pre>{`import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function [שמך]JokePage({ onBack }: PageProps) {
  return (
    <div className={\`joke-page \${styles.jokePage}\`}>
      <p>כותרת הבדיחה</p>
      <p>תשובת הבדיחה</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}`}</pre>
            </li>
            <li>
              <strong>הוסיפי את עצמך</strong> לקובץ <code>src/students/index.ts</code> — <strong>לפי סדר האלף-בית העברי של שם המשפחה, ידנית, ללא sort!</strong>
              <pre>{`{
  id: "[שם-שלי-באנגלית]",
  name: "[שם מלא בעברית]",
  jokeTitle: "[כותרת קצרה לטאב]",
  CardComponent: [שמך]Card,
  JokePageComponent: [שמך]JokePage,
},`}</pre>
            </li>
            <li>
              <strong>Commit ו-Push</strong> לבראנץ' האישי:
              <pre>{`git add src/students/[שם-שלי-באנגלית]/\ngit add src/students/index.ts\ngit commit -m "add: [שמך] joke"\ngit push -u origin [שם-הבראנץ'-שלך]`}</pre>
            </li>
          </ol>
        </section>

        {/* Merge flow */}
        <section className="instructions-section">
          <h2>🔀 סדר המיזוגים</h2>
          <ol className="merge-steps">
            <li>כל תלמידה פותחת <strong>Pull Request</strong> מהבראנץ' שלה אל בראנץ' התת-צוות</li>
            <li>פותרים קונפליקטים — <strong>הסדר ב-index.ts חייב להישמר לפי א"ב!</strong></li>
            <li>תת-הצוות פותחת PR מהבראנץ' שלה אל בראנץ' הצוות</li>
            <li>פותרים קונפליקטים שוב</li>
            <li>הצוות פותח PR מהבראנץ' שלו אל <code>main</code></li>
          </ol>
          <div className="branch-rule">
            <strong>💡 טיפ חשוב:</strong> לפני כל PR — עשו <code>git pull</code> מבראנץ' היעד כדי להביא שינויים חדשים ולפתור קונפליקטים מקומית לפני ה-push.
          </div>
        </section>
      </div>
    </div>
  );
}
