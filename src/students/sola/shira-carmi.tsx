import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "dots",
  icon: "🌿",
  background: "linear-gradient(145deg, #ecfdf5, #a7f3d0)",
  foreground: "#064e3b",
  muted: "#047857",
  accent: "#059669",
  joke: (
    <>
      <p>למה מפתחים כל כך אוהבים להשתמש ב-Git?</p>
      <p><strong>כי זה המקום היחיד שבו מותר לדחוף (push) בלי לבקש סליחה! 😄</strong></p>
      <details>
        <summary>הסבר הבדיחה</summary>
        <p>ב-Git, הפקודה push שולחת שינויים מהמאגר המקומי למאגר המרוחק. הבדיחה משחקת על המשמעות הנוספת של המילה באנגלית: לדחוף.</p>
      </details>
      <p><a href="https://www.reddit.com/r/ProgrammerHumor/comments/1l5h8u/git_joke/" target="_blank" rel="noreferrer">מקור: Programmer Humor</a></p>
    </>
  ),
};

export default profile;
