import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "spotlight",
  icon: "👓",
  background: "linear-gradient(145deg, #fdf2f8, #fbcfe8)",
  foreground: "#831843",
  muted: "#9d174d",
  accent: "#db2777",
  joke: (
    <><p>חולה אומר לרופא: ״דוקטור, אני חושב שאני צריך משקפיים״.</p><p><strong>הרופא עונה: ״אתה בהחלט צריך — זה בנק, לא מרפאה״. 👓</strong></p></>
  ),
};

export default profile;
