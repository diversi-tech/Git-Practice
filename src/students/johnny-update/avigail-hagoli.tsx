import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "stripes",
  icon: "🐈",
  background: "linear-gradient(145deg, #fff7ed, #fde68a)",
  foreground: "#713f12",
  muted: "#92400e",
  accent: "#d97706",
  joke: (
    <><p>ילד נכנס לחנות חיות ומגלה חתול שטוען שעבד פעם כסוכן חשאי, טייל בעולם והאזין לשיחות סודיות.</p><p>הילד שואל את המוכר: ״למה אתם מוכרים חתול מיוחד כל כך?״</p><p><strong>המוכר עונה: ״כי הוא ממציא סיפורים כל היום...״ 😸</strong></p></>
  ),
};

export default profile;
