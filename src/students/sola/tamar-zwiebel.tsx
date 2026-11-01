import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "grid",
  icon: "💡",
  background: "linear-gradient(145deg, #1e293b, #334155)",
  foreground: "#f8fafc",
  muted: "#cbd5e1",
  accent: "#facc15",
  joke: (
    <>
      <p>כמה מתכנתים צריך כדי להחליף נורה שרופה?</p>
      <p><strong>אף אחד. זו בעיית חומרה — שאנשי ה-Hardware יטפלו בה! 💡</strong></p>
    </>
  ),
};

export default profile;
