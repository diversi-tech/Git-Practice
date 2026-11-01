import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "circuit",
  icon: "🦠",
  background: "linear-gradient(145deg, #111827, #27272a)",
  foreground: "#f8fafc",
  muted: "#86efac",
  accent: "#16a34a",
  joke: (
    <><p>למה המחשב הלך לרופא?</p><p><strong>כי היה לו וירוס! 😄</strong></p></>
  ),
};

export default profile;
