import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "grid",
  icon: "🌲",
  background: "linear-gradient(145deg, #ecfdf5, #a7f3d0)",
  foreground: "#064e3b",
  muted: "#047857",
  accent: "#059669",
  joke: (
    <><p>למה מתכנתים שונאים לטייל בטבע?</p><p><strong>כי יש שם יותר מדי באגים ואין להם מושג איפה ה-Wi-Fi. 🌲🐜</strong></p></>
  ),
};

export default profile;
