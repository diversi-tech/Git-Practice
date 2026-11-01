import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "circuit",
  icon: "🖥️",
  background: "linear-gradient(145deg, #0f172a, #1e3a5f)",
  foreground: "#f8fafc",
  muted: "#93c5fd",
  accent: "#3b82f6",
  joke: (
    <><p>מתכנת מגיע נסער למנהל הצוות: ״אני לא מבין למה הלקוח מתלונן שהמערכת קורסת — במחשב שלי הכול עובד מצוין!״</p><p><strong>המנהל מחייך: ״מעולה, אז פשוט נספק ללקוח את המחשב שלך...״ 🖥️</strong></p></>
  ),
};

export default profile;
