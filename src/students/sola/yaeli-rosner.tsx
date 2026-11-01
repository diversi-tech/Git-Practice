import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "rays",
  icon: "🍲",
  background: "linear-gradient(145deg, #fff7ed, #fed7aa)",
  foreground: "#7c2d12",
  muted: "#9a3412",
  accent: "#ea580c",
  artwork: <span>🤵‍♂️　🥣　🙋‍♂️</span>,
  joke: (
    <>
      <p>לקוח במסעדה קורא למלצר: "בוא מהר ותטעם מהמרק!"</p>
      <p>המלצר שואל: "הוא קר? חסר מלח? חסר פלפל?" והלקוח רק מתעקש: "תטעם מהמרק!"</p>
      <p>המלצר נכנע: "טוב, איפה הכף?"</p>
      <p><strong>הלקוח עונה: "אההה! בשעה טובה!" 🥄</strong></p>
    </>
  ),
};

export default profile;
