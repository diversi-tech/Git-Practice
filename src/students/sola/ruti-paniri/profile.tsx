import type { SolaProfile } from "../profileTypes";

const profile: SolaProfile = {
  pattern: "grid",
  icon: "💻",
  background: "linear-gradient(145deg, #eff6ff, #bfdbfe)",
  foreground: "#1e3a8a",
  muted: "#2563eb",
  accent: "#3b82f6",
  joke: (
    <>
      <p>אדם שואל את חברו: "איך זה שהמחשב שלך תמיד עובד כל כך מהר?"</p>
      <p><strong>החבר עונה: "כשהוא מתחיל לעבוד לאט, אני מראה לו את חשבון החשמל שלי!"</strong></p>
    </>
  ),
};

export default profile;
