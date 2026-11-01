import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "glow",
  icon: "☕",
  background: "linear-gradient(145deg, #fff7ed, #fed7aa)",
  foreground: "#7c2d12",
  muted: "#9a3412",
  accent: "#ea580c",
  joke: (
    <><p>אדם מספר לרופא: ״בכל פעם שאני שותה קפה, אני מרגיש דקירה חדה בעין ימין״.</p><p><strong>הרופא עונה: ״בפעם הבאה פשוט תוציא את הכפית מהכוס״. ☕🥄</strong></p></>
  ),
};

export default profile;
