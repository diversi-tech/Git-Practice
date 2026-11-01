import type { SolaProfile } from "../profileTypes";

const profile: SolaProfile = {
  pattern: "glow",
  icon: "☕",
  background: "linear-gradient(145deg, #fdf4e7, #d6b48a)",
  foreground: "#422006",
  muted: "#78350f",
  accent: "#b45309",
  joke: (
    <>
      <p>למה מתכנתים שותים קפה?</p>
      <p><strong>כי בלי Java הם לא רצים. ☕</strong></p>
    </>
  ),
};

export default profile;
