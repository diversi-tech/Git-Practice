import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "circuit",
  icon: "🔀",
  background: "linear-gradient(145deg, #111827, #312e81)",
  foreground: "#f8fafc",
  muted: "#c4b5fd",
  accent: "#8b5cf6",
  joke: (
    <><p>מה עושים כשיש הרבה שגיאות בהעלאה ל-GitHub?</p><p><code>fatal: refusing to merge unrelated histories</code></p><p><strong>עושים הפעלה מחדש למחשב ומקווים שהקונפליקטים ייעלמו. 😅</strong></p></>
  ),
};

export default profile;
