import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "stripes",
  icon: "🐞",
  background: "linear-gradient(145deg, #f0fdf4, #bbf7d0)",
  foreground: "#14532d",
  muted: "#166534",
  accent: "#16a34a",
  joke: (
    <><p>למה מתכנתים כל כך שונאים את הטבע?</p><p><strong>כי יש שם יותר מדי באגים, ואי אפשר לעשות לזה ריסטארט. 🐞</strong></p></>
  ),
};

export default profile;
