import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "circuit",
  icon: "🤖",
  background: "linear-gradient(145deg, #f0f4ff, #dbe4ff)",
  foreground: "#1f2937",
  muted: "#4f46e5",
  accent: "#4f46e5",
  joke: (
    <><p>Why did the computer go to the doctor?</p><p><strong>Because it had too many bugs! 🤖🐞</strong></p></>
  ),
};

export default profile;
