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

        <section className="instructions-section">
          <h2>🌿 היררכיית הבראנצ'ים</h2>
          <p className="instructions-intro">
            כל שינוי מתקדם מלמטה למעלה. פותחים PR רק אל הבראנץ' הבא בהיררכיה.
          </p>
          <div className="branch-tree">
            <div className="branch-level branch-main">
              <span className="branch-icon">🌳</span>
              <code>master</code>
              <span className="branch-desc">הגרסה הסופית</span>
            </div>
            <div className="branch-connector">↑ merge</div>
            <div className="branch-level branch-team">
              <span className="branch-icon">👥</span>
              <code>[צוות]</code>
              <span className="branch-desc">לדוגמה: Vcomm</span>
            </div>
            <div className="branch-connector">↑ merge</div>
            <div className="branch-level branch-subteam">
              <span className="branch-icon">🤝</span>
              <code>[תת-צוות]</code>
              <span className="branch-desc">לדוגמה: Vcomm_1</span>
            </div>
            <div className="branch-connector">↑ merge</div>
            <div className="branch-level branch-student">
              <span className="branch-icon">🙋</span>
              <code>[בראנץ' אישי]</code>
              <span className="branch-desc">העבודה האישית שלך</span>
            </div>
          </div>
          <div className="branch-rule">
            <strong>⚠️ חוק ברזל:</strong> צרי את הבראנץ' האישי מהבראנץ' המעודכן של תת-הצוות שלך. אל תפתחי PR אישי ישירות לצוות או ל-<code>master</code>.
          </div>
        </section>

        <section className="instructions-section">
          <h2>🚀 הוספת בדיחה</h2>
          <ol className="instructions-steps">
            <li>
              <strong>צרי בראנץ' אישי</strong> מתת-הצוות שלך:
              <pre>{`git checkout [בראנץ'-תת-הצוות]
git pull origin [בראנץ'-תת-הצוות]
git checkout -b [הבראנץ'-האישי]`}</pre>
            </li>
            <li>
              <strong>צרי תיקייה אישית</strong> בנתיב:
              <pre>{`src/students/[השם-שלך-באנגלית]/`}</pre>
            </li>
            <li>
              <strong>צרי שלושה קבצים:</strong>
              <div className="file-list">
                <div className="file-item">
                  <code>Card.tsx</code>
                  <span>כרטיס שמופיע בדף הבית</span>
                </div>
                <div className="file-item">
                  <code>JokePage.tsx</code>
                  <span>עמוד שמציג את הבדיחה המלאה</span>
                </div>
                <div className="file-item">
                  <code>styles.module.css</code>
                  <span>עיצוב הכרטיס ועמוד הבדיחה</span>
                </div>
              </div>
            </li>
            <li>
              <strong>בני את הכרטיס</strong> עם אייקון או תמונה, כותרת קצרה בשורה אחת, שם, תת-צוות וכפתור נפרד לבדיחה:
              <pre>{`import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function YourNameCard({ student, onClick }: CardProps) {
  return (
    <div className={\`joke-card \${styles.card}\`}>
      <span className={styles.icon} aria-hidden="true">😄</span>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <a className={styles.name} href={\`mailto:\${student.email}\`}>
        {student.name}
      </a>
      {student.teamProjectUrl ? (
        <a className={styles.team} href={student.teamProjectUrl}>
          צוות {student.teamName}
        </a>
      ) : (
        <span className={styles.team}>צוות {student.teamName}</span>
      )}
      <button className={styles.action} type="button" onClick={onClick}>
        לבדיחה ←
      </button>
    </div>
  );
}`}</pre>
              <p>
                כתובת האימייל מוסתרת: מציגים רק את השם, והשם הוא קישור <code>mailto:</code>. הכרטיס כולו אינו לחיץ כדי שלא יחסום את קישור האימייל.
              </p>
            </li>
            <li>
              <strong>הוסיפי את כללי העיצוב החשובים:</strong>
              <pre>{`.card { cursor: default; }

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.name { text-decoration: none; }
.name:hover { text-decoration: underline; }`}</pre>
              <p>השם מקבל קו תחתון רק במעבר עכבר, והכותרת אינה שוברת את מבנה הכרטיס.</p>
            </li>
            <li>
              <strong>בני את עמוד הבדיחה</strong> כך שיציג את כל הבדיחה, כולל הפתיח והתשובה. השתמשי באותם צבעים של הכרטיס:
              <pre>{`import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YourNameJokePage({ onBack }: PageProps) {
  return (
    <div className={\`joke-page \${styles.jokePage}\`}>
      <p>פתיח הבדיחה</p>
      <p>תשובת הבדיחה</p>
      <button type="button" onClick={onBack}>← חזרה</button>
    </div>
  );
}`}</pre>
            </li>
            <li>
              <strong>רשמי את עצמך</strong> בתחילת המערך בקובץ <code>src/students/index.ts</code>. הרשומות מסודרות מהחדשה לישנה:
              <pre>{`{
  id: "[השם-שלך-באנגלית]",
  name: "[השם-המלא]",
  jokeTitle: "[כותרת קצרה בשורה אחת]",
  email: "[כתובת אימייל]",
  teamName: "[השם המדויק של תת-הצוות]",
  teamProjectUrl: "",
  CardComponent: YourNameCard,
  JokePageComponent: YourNameJokePage,
},`}</pre>
              <p>
                השאירי <code>teamProjectUrl: ""</code> עד שיהיה קישור לפרויקט הצוות. בינתיים שם הצוות יוצג כטקסט רגיל.
              </p>
            </li>
            <li>
              <strong>בדקי, שמרי ודחפי:</strong>
              <pre>{`npm run build
git add src/students/[השם-שלך-באנגלית]/ src/students/index.ts
git commit -m "add: [השם-שלך] joke"
git push -u origin [הבראנץ'-האישי]`}</pre>
            </li>
          </ol>
        </section>

        <section className="instructions-section">
          <h2>🔍 Preview, אישור ומיזוג</h2>
          <ol className="merge-steps">
            <li>פתחי PR מהבראנץ' האישי אל תת-הצוות שהוקצה לך.</li>
            <li>המתיני עד ש-<strong>Pull Request Preview</strong> יעבור בהצלחה.</li>
            <li>פתחי את קישור ה-GitHub Pages שהבוט מוסיף ל-PR.</li>
            <li>בדקי את הכרטיס, קישור האימייל, שם תת-הצוות, כפתור הבדיחה, עמוד הבדיחה המלא, הצבעים והכותרת.</li>
            <li>מזגי רק אחרי אישור מפורש.</li>
            <li>מחקי את בראנץ' המקור רק אחרי ש-GitHub מאשר שהמיזוג הסתיים.</li>
          </ol>
          <div className="branch-rule">
            <strong>💡 אחרי כל מיזוג:</strong> אם יש PR נוסף לאותו יעד, עדכני אותו מבראנץ' היעד החדש, פתרי את <code>src/students/index.ts</code> בסדר חדש-לישן, הריצי build ובדקי Preview חדש. אין לאשר Preview שנוצר מול יעד ישן.
          </div>
        </section>

        <section className="instructions-section">
          <h2>🔀 קידום בין הרמות</h2>
          <ol className="merge-steps">
            <li>ממזגים כל תלמידה לתת-הצוות, PR אחד בכל פעם.</li>
            <li>פותחים PR מכל תת-צוות אל בראנץ' הצוות, ומעדכנים את ה-PR הבא אחרי כל מיזוג.</li>
            <li>לאחר שכל תתי-הצוות מוזגו, פותחים PR אחד מהצוות אל <code>master</code>.</li>
            <li>בכל רמה נדרשים build תקין, Preview מעודכן ואישור מפורש לפני המיזוג.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
