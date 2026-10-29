import { ReactNode } from "react";

export type SolaPattern = "dots" | "glow" | "grid" | "stripes" | "rays" | "clean";

export interface SolaProfile {
  icon: string;
  pattern: SolaPattern;
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  artwork?: ReactNode;
  joke: ReactNode;
}

export const solaProfiles: Record<string, SolaProfile> = {
  "yehudit-birman": {
    pattern: "dots",
    icon: "🐧",
    background: "radial-gradient(circle at 18% 12%, #e0f2fe 0 2px, transparent 3px), linear-gradient(145deg, #f8fdff, #dff5ff)",
    foreground: "#172554",
    muted: "#475569",
    accent: "#0284c7",
    joke: (
      <>
        <p>שוטר עוצר נהג שנוסע במהירות מטורפת. במושב האחורי יושב פינגווין.</p>
        <p>השוטר אומר: "קח את הפינגווין הזה מיד לגן החיות!" והנהג מבטיח לעשות זאת.</p>
        <p>למחרת השוטר עוצר אותו שוב. הפינגווין עדיין שם, והפעם הוא מרכיב משקפי שמש.</p>
        <p>השוטר צועק: "לא אמרתי לך לקחת אותו לגן החיות?"</p>
        <p><strong>הנהג עונה: "בטח שלקחתי! הוא כל כך נהנה, שהיום אנחנו הולכים לים!"</strong></p>
      </>
    ),
  },
  "yael-hain": {
    pattern: "glow",
    icon: "🐛",
    background: "linear-gradient(145deg, #111827, #1e293b)",
    foreground: "#f8fafc",
    muted: "#a5b4fc",
    accent: "#a3e635",
    joke: (
      <>
        <p>למה מתכנתים אוהבים להשתמש במצב לילה (Dark Mode)?</p>
        <p><strong>כי אור מושך באגים. 😉</strong></p>
      </>
    ),
  },
  "sara-levin": {
    pattern: "grid",
    icon: "🥚",
    background: "linear-gradient(145deg, #18181b, #09090b)",
    foreground: "#fafafa",
    muted: "#a1a1aa",
    accent: "#fb7185",
    joke: (
      <>
        <p>אמא של מתכנת שלחה אותו לסופר: "תקנה כיכר לחם, ואם יש ביצים – תקנה עשר".</p>
        <p>הוא חזר הביתה עם עשר כיכרות לחם.</p>
        <p><strong>כששאלה אותו למה, הוא ענה: "כי היו ביצים". 🥚</strong></p>
      </>
    ),
  },
  "efrat-madmon": {
    pattern: "stripes",
    icon: "🚌",
    background: "linear-gradient(145deg, #fffdf5, #f7ead0)",
    foreground: "#422006",
    muted: "#78716c",
    accent: "#d97706",
    joke: (
      <>
        <p>איש הולך ברחוב ורואה אדם יושב על המדרכה ומחזיק שלט: "אנא עזרו לי, חסרים לי עשרה שקלים לאוטובוס הביתה".</p>
        <p><strong>האיש מוציא חמישים שקלים ואומר: "קח, ותביא איתך עוד ארבעה חברים!"</strong></p>
      </>
    ),
  },
  "yaeli-rosner": {
    pattern: "rays",
    icon: "🍲",
    background: "linear-gradient(145deg, #fff7ed, #fed7aa)",
    foreground: "#7c2d12",
    muted: "#9a3412",
    accent: "#ea580c",
    artwork: <span>🤵‍♂️　🥣　🙋‍♂️</span>,
    joke: (
      <>
        <p>לקוח במסעדה קורא למלצר: "בוא מהר ותטעם מהמרק!"</p>
        <p>המלצר שואל: "הוא קר? חסר מלח? חסר פלפל?" והלקוח רק מתעקש: "תטעם מהמרק!"</p>
        <p>המלצר נכנע: "טוב, איפה הכף?"</p>
        <p><strong>הלקוח עונה: "אההה! בשעה טובה!" 🥄</strong></p>
      </>
    ),
  },
  "tamar-damti": {
    pattern: "clean",
    icon: "🍌",
    background: "linear-gradient(145deg, #fffbea, #fde68a)",
    foreground: "#713f12",
    muted: "#92400e",
    accent: "#eab308",
    joke: (
      <>
        <p>שני אנשים הולכים ברחוב. אחד מהם רואה קליפת בננה על המדרכה, כמה מטרים לפניהם.</p>
        <p><strong>הוא נאנח ואומר לחברו: "אוף, נו באמת... עוד פעם אני הולך ליפול!" 🍌</strong></p>
      </>
    ),
  },
  "hadas-homri": {
    pattern: "glow",
    icon: "🪟",
    background: "linear-gradient(145deg, #fdf2f8, #c7d2fe)",
    foreground: "#312e81",
    muted: "#6366f1",
    accent: "#db2777",
    joke: (
      <>
        <p>למה מתכנתים תמיד קופאים מקור?</p>
        <p><strong>כי הם אוהבים לפתוח המון חלונות! 🪟❄️</strong></p>
      </>
    ),
  },
  "tamar-zwiebel": {
    pattern: "grid",
    icon: "💡",
    background: "linear-gradient(145deg, #1e293b, #334155)",
    foreground: "#f8fafc",
    muted: "#cbd5e1",
    accent: "#facc15",
    joke: (
      <>
        <p>כמה מתכנתים צריך כדי להחליף נורה שרופה?</p>
        <p><strong>אף אחד. זו בעיית חומרה — שאנשי ה-Hardware יטפלו בה! 💡</strong></p>
      </>
    ),
  },
  "gili-lev": {
    pattern: "rays",
    icon: "🏃‍♀️",
    background: "linear-gradient(145deg, #ecfeff, #a5f3fc)",
    foreground: "#164e63",
    muted: "#0e7490",
    accent: "#0891b2",
    joke: (
      <>
        <p>תלמיד מגיע לבית הספר בריצה, חצי שעה אחרי תחילת השיעור.</p>
        <p>המורה כועסת: "אתה יודע שאתה מאחר? היית צריך להיות כאן כבר בשמונה!"</p>
        <p><strong>התלמיד עונה: "למה? מה קרה בשמונה?" 🏃‍♂️</strong></p>
      </>
    ),
  },
  "yehudit-vogshal": {
    pattern: "dots",
    icon: "⏰",
    background: "linear-gradient(145deg, #f5f3ff, #ddd6fe)",
    foreground: "#4c1d95",
    muted: "#6d28d9",
    accent: "#8b5cf6",
    joke: (
      <>
        <p>החלטתי לשים את השעון המעורר בצד השני של החדר, כדי שאהיה חייבת לקום כדי לכבות אותו...</p>
        <p><strong>עכשיו יש לי גם שמיכה וכרית בצד השני של החדר. 🛌</strong></p>
      </>
    ),
  },
  "shifra-zaafrani": {
    pattern: "stripes",
    icon: "🪙",
    background: "linear-gradient(145deg, #172033, #27364f)",
    foreground: "#f8fafc",
    muted: "#cbd5e1",
    accent: "#38bdf8",
    joke: (
      <>
        <p>איש רואה קבצן ברחוב שמחזיק שלט: "אני קבצן, תנו לי כסף בבקשה".</p>
        <p>האיש נותן לו כסף ושואל: "למה אתה לא הולך לעבוד?"</p>
        <p><strong>הקבצן עונה: "אני לא יכול לעבוד — אני קבצן!"</strong></p>
      </>
    ),
  },
  "ruti-paniri": {
    pattern: "grid",
    icon: "💻",
    background: "linear-gradient(145deg, #eff6ff, #bfdbfe)",
    foreground: "#1e3a8a",
    muted: "#2563eb",
    accent: "#3b82f6",
    joke: (
      <>
        <p>אדם שואל את חברו: "איך זה שהמחשב שלך תמיד עובד כל כך מהר?"</p>
        <p><strong>החבר עונה: "כשהוא מתחיל לעבוד לאט, אני מראה לו את חשבון החשמל שלי!"</strong></p>
      </>
    ),
  },
  "sari-yagelnik": {
    pattern: "rays",
    icon: "🔟",
    background: "linear-gradient(145deg, #ecfccb, #bef264)",
    foreground: "#365314",
    muted: "#4d7c0f",
    accent: "#65a30d",
    joke: (
      <>
        <p>יש 10 סוגים של אנשים בעולם:</p>
        <p><strong>אלו שמבינים קוד בינארי, ואלו שלא. 😉</strong></p>
      </>
    ),
  },
  "malki-gdelovitz": {
    pattern: "glow",
    icon: "☕",
    background: "linear-gradient(145deg, #fdf4e7, #d6b48a)",
    foreground: "#422006",
    muted: "#78350f",
    accent: "#b45309",
    joke: (
      <>
        <p>למה מתכנתים שותים קפה?</p>
        <p><strong>כי בלי Java הם לא רצים. ☕</strong></p>
      </>
    ),
  },
  "shira-carmi": {
    pattern: "dots",
    icon: "🌿",
    background: "linear-gradient(145deg, #ecfdf5, #a7f3d0)",
    foreground: "#064e3b",
    muted: "#047857",
    accent: "#059669",
    joke: (
      <>
        <p>למה מפתחים כל כך אוהבים להשתמש ב-Git?</p>
        <p><strong>כי זה המקום היחיד שבו מותר לדחוף (push) בלי לבקש סליחה! 😄</strong></p>
        <details>
          <summary>הסבר הבדיחה</summary>
          <p>ב-Git, הפקודה push שולחת שינויים מהמאגר המקומי למאגר המרוחק. הבדיחה משחקת על המשמעות הנוספת של המילה באנגלית: לדחוף.</p>
        </details>
        <p><a href="https://www.reddit.com/r/ProgrammerHumor/comments/1l5h8u/git_joke/" target="_blank" rel="noreferrer">מקור: Programmer Humor</a></p>
      </>
    ),
  },
};
