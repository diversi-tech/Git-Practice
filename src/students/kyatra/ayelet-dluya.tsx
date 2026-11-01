import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "spotlight",
  icon: "🐛",
  background: "linear-gradient(145deg, #fef2f2, #fecaca)",
  foreground: "#7f1d1d",
  muted: "#b91c1c",
  accent: "#dc2626",
  joke: (
    <><p>ארבעת השלבים הרשמיים של מתכנתת כשהקוד לא עובד:</p><p>1. מוזר, במחשב שלי זה עבד.<br />2. למה זה עושה את זה?<br />3. אהה, הבנתי למה!<br /><strong>4. רגע... למה זה עובד עכשיו?! 🤔</strong></p></>
  ),
};

export default profile;
