import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "dots",
  icon: "🐱",
  background: "linear-gradient(145deg, #fff7ed, #fed7aa)",
  foreground: "#7c2d12",
  muted: "#9a3412",
  accent: "#ea580c",
  joke: (
    <><p>מה עושה חתול בזמן שהוא מתכנת?</p><p><strong>הוא מקליד ב-purr-fect accuracy! 😹</strong></p></>
  ),
};

export default profile;
