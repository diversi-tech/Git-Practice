import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "clean",
  icon: "🍞",
  background: "linear-gradient(145deg, #ecfccb, #bef264)",
  foreground: "#365314",
  muted: "#4d7c0f",
  accent: "#4d7c0f",
  joke: (
    <><p>אשתו של מתכנת מבקשת: ״תקנה כיכר לחם. אם יש ביצים — תביא עשר״.</p><p>אחרי חצי שעה הוא חוזר עם עשר כיכרות לחם.</p><p><strong>כששאלה למה, הוא ענה: ״כי היו ביצים״. 🍞🥚</strong></p></>
  ),
};

export default profile;
