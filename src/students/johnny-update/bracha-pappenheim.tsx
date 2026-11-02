import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "aurora",
  icon: "🌀",
  background: "linear-gradient(145deg, #ede9fe, #c4b5fd)",
  foreground: "#3b0764",
  muted: "#6d28d9",
  accent: "#7c3aed",
  joke: (
    <><p>מה קורה כשמתכנת סטלן מנסה לדבג קוד?</p><p><strong>הוא מוצא באג, בוהה בו עשר דקות ואומר: ״מי אמר שזו טעות? אולי זה פשוט ה-Feature של היקום...״ 🌀</strong></p></>
  ),
};

export default profile;
