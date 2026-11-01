import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "grid",
  icon: "☕",
  background: "linear-gradient(145deg, #172033, #263a5c)",
  foreground: "#f8fafc",
  muted: "#93c5fd",
  accent: "#2563eb",
  joke: (
    <><p>סטאז׳ר שואל: ״איך הקוד שכתבתי אתמול עבד מעולה, והיום בלי שנגעתי בו הוא לא עובד?״</p><p><strong>המפתח הבכיר עונה: ״חוק שימור הבאגים אומר שקוד אף פעם לא באמת עובד — הוא פשוט לוקח הפסקת קפה לפעמים״. ☕</strong></p></>
  ),
};

export default profile;
