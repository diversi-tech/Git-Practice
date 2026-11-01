import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "circuit",
  icon: "🦠",
  background: "linear-gradient(145deg, #101010, #27272a)",
  foreground: "#fafafa",
  muted: "#86efac",
  accent: "#16a34a",
  joke: (
    <><p>למה המחשב הלך לרופא?</p><p><strong>כי היה לו וירוס! 🦠💻</strong></p></>
  ),
};

export default profile;
