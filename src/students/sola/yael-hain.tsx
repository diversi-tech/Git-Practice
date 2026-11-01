import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "stripes",
  icon: "🌾",
  background: "linear-gradient(145deg, #fefce8, #d9f99d)",
  foreground: "#365314",
  muted: "#4d7c0f",
  accent: "#65a30d",
  joke: (
    <>
      <p>למה הדחליל זכה בפרס?</p>
      <p><strong>כי הוא היה יוצא מן הכלל בשדה שלו! 🌾</strong></p>
    </>
  ),
};

export default profile;
