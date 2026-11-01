import type { SolaProfile } from "../profileTypes";

const profile: SolaProfile = {
  pattern: "rays",
  icon: "🏃‍♀️",
  background: "linear-gradient(145deg, #ecfeff, #a5f3fc)",
  foreground: "#164e63",
  muted: "#0e7490",
  accent: "#0891b2",
  joke: (
    <>
      <p>תלמיד מגיע לבית הספר בריצה, חצי שעה אחרי תחילת השיעור.</p>
      <p>המורה כועסת: "אתה יודע שאתה מאחר? היית צריך להיות כאן כבר בשמונה!"</p>
      <p><strong>התלמיד עונה: "למה? מה קרה בשמונה?" 🏃‍♂️</strong></p>
    </>
  ),
};

export default profile;
