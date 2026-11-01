import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "stripes",
  icon: "🚌",
  background: "linear-gradient(145deg, #fffdf5, #f7ead0)",
  foreground: "#422006",
  muted: "#78716c",
  accent: "#d97706",
  joke: (
    <>
      <p>איש הולך ברחוב ורואה אדם יושב על המדרכה ומחזיק שלט: "אנא עזרו לי, חסרים לי עשרה שקלים לאוטובוס הביתה".</p>
      <p><strong>האיש מוציא חמישים שקלים ואומר: "קח, ותביא איתך עוד ארבעה חברים!"</strong></p>
    </>
  ),
};

export default profile;
