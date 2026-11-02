import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "checker",
  icon: "🍗",
  background: "linear-gradient(145deg, #fefce8, #fde68a)",
  foreground: "#713f12",
  muted: "#854d0e",
  accent: "#d97706",
  joke: (
    <><p>איש אחד הלך, הלך, הלך, נתקע בקיר — בום שניצל.</p><p><strong>איש אחד פספס את הטיסה. מה אכפת לו? הוא בכלל לא אוהב חומוס. 🍗</strong></p></>
  ),
};

export default profile;
