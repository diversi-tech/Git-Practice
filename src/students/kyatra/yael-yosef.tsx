import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "checker",
  icon: "👖",
  background: "linear-gradient(145deg, #eef2ff, #c7d2fe)",
  foreground: "#312e81",
  muted: "#4338ca",
  accent: "#4f46e5",
  joke: (
    <><p>המורה: ״דני, אם יש לך חמישה שקלים בכיס ימין וחמישה שקלים בכיס שמאל — מה יש לך?״</p><p><strong>דני: ״מכנסיים של מישהו אחר!״ 👖</strong></p></>
  ),
};

export default profile;
