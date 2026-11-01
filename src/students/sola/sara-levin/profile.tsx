import type { SolaProfile } from "../profileTypes";

const profile: SolaProfile = {
  pattern: "grid",
  icon: "🥚",
  background: "linear-gradient(145deg, #18181b, #09090b)",
  foreground: "#fafafa",
  muted: "#a1a1aa",
  accent: "#fb7185",
  joke: (
    <>
      <p>אמא של מתכנת שלחה אותו לסופר: "תקנה כיכר לחם, ואם יש ביצים – תקנה עשר".</p>
      <p>הוא חזר הביתה עם עשר כיכרות לחם.</p>
      <p><strong>כששאלה אותו למה, הוא ענה: "כי היו ביצים". 🥚</strong></p>
    </>
  ),
};

export default profile;
