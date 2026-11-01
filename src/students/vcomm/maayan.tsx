import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "spotlight",
  icon: "🖥️",
  background: "linear-gradient(145deg, #111111, #25102f)",
  foreground: "#ffffff",
  muted: "#22d3ee",
  accent: "#ff00ff",
  joke: (
    <><p>למה מתכנתים שונאים את הטבע?</p><p><strong>כי הוא מלא באגים! 🖥️🐛</strong></p></>
  ),
};

export default profile;
