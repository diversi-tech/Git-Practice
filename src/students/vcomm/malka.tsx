import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "dots",
  icon: "🍪",
  background: "linear-gradient(145deg, #e0f2fe, #7dd3fc)",
  foreground: "#0c4a6e",
  muted: "#0369a1",
  accent: "#0284c7",
  joke: (
    <><p>מה מתכנת עושה כשהוא רוצה להרזות?</p><p><strong>מוחק את ה-Cookies בדפדפן! 💻🍪</strong></p></>
  ),
};

export default profile;
