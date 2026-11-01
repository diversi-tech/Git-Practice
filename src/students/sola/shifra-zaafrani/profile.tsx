import type { SolaProfile } from "../profileTypes";

const profile: SolaProfile = {
  pattern: "stripes",
  icon: "🪙",
  background: "linear-gradient(145deg, #172033, #27364f)",
  foreground: "#f8fafc",
  muted: "#cbd5e1",
  accent: "#38bdf8",
  joke: (
    <>
      <p>איש רואה קבצן ברחוב שמחזיק שלט: "אני קבצן, תנו לי כסף בבקשה".</p>
      <p>האיש נותן לו כסף ושואל: "למה אתה לא הולך לעבוד?"</p>
      <p><strong>הקבצן עונה: "אני לא יכול לעבוד — אני קבצן!"</strong></p>
    </>
  ),
};

export default profile;
