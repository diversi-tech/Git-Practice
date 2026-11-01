import type { StudentProfile } from "../../types";

const profile: StudentProfile = {
  pattern: "dots",
  icon: "🐧",
  background: "radial-gradient(circle at 18% 12%, #e0f2fe 0 2px, transparent 3px), linear-gradient(145deg, #f8fdff, #dff5ff)",
  foreground: "#172554",
  muted: "#475569",
  accent: "#0284c7",
  joke: (
    <>
      <p>שוטר עוצר נהג שנוסע במהירות מטורפת. במושב האחורי יושב פינגווין.</p>
      <p>השוטר אומר: "קח את הפינגווין הזה מיד לגן החיות!" והנהג מבטיח לעשות זאת.</p>
      <p>למחרת השוטר עוצר אותו שוב. הפינגווין עדיין שם, והפעם הוא מרכיב משקפי שמש.</p>
      <p>השוטר צועק: "לא אמרתי לך לקחת אותו לגן החיות?"</p>
      <p><strong>הנהג עונה: "בטח שלקחתי! הוא כל כך נהנה, שהיום אנחנו הולכים לים!"</strong></p>
    </>
  ),
};

export default profile;
