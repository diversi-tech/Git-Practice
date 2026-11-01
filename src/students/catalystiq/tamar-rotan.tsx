import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "spotlight",
  icon: "🎭",
  background: "linear-gradient(145deg, #fdf2f8, #ddd6fe)",
  foreground: "#581c87",
  muted: "#7e22ce",
  accent: "#a855f7",
  joke: (
    <><p>בראיון עבודה המועמד אומר שהתכונה הבולטת שלו היא שהוא טוב במתן תשובות בלי לחשוף מה מאחורי הקלעים.</p><p>המראיין שואל: ״ומהי התכונה הכי פחות טובה שלך?״</p><p><strong>המועמד עונה: ״שאני לא יודע מתי לעצור!״ 🎭</strong></p></>
  ),
};

export default profile;
