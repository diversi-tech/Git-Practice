import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "checker",
  icon: "🧮",
  background: "linear-gradient(145deg, #eef2ff, #c7d2fe)",
  foreground: "#312e81",
  muted: "#6366f1",
  accent: "#4f46e5",
  joke: (
    <><p>מורה שואלת תלמיד: ״אם יש לך 10 שקלים ואתה מבקש מאמא עוד 10 — כמה יש לך?״</p><p>התלמיד עונה: ״10״. המורה שואלת: ״אתה לא יודע חשבון?״</p><p><strong>התלמיד עונה: ״את לא מכירה את אמא שלי...״ 😄</strong></p></>
  ),
};

export default profile;
