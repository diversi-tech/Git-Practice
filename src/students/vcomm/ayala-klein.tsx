import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "rays",
  icon: "🔁",
  background: "linear-gradient(145deg, #ede9fe, #c4b5fd)",
  foreground: "#3b0764",
  muted: "#6d28d9",
  accent: "#6d28d9",
  joke: (
    <><p>מה מתכנת עושה כשהוא לא מצליח לישון?</p><p><strong>סופר כבשים? לא, הוא פשוט בודק למה הלולאה לא עוצרת!</strong></p></>
  ),
};

export default profile;
