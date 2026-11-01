import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "aurora",
  icon: "🩺",
  background: "linear-gradient(145deg, #ecfdf5, #a7f3d0)",
  foreground: "#064e3b",
  muted: "#047857",
  accent: "#059669",
  joke: (
    <><p>איש אומר לרופא: ״כל הגוף שלי כואב! כשאני נוגע במצח, בברך או בבטן — כואב לי״.</p><p><strong>הרופא בודק אותו ואומר: ״הבנתי את הבעיה — האצבע שלך שבורה״. 🩺</strong></p></>
  ),
};

export default profile;
