import { PageProps } from "../../types";

export default function AyalaKleinJokePage2({ onBack }: PageProps) {
  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "sans-serif" }}>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        מה מתכנת עושה כשהוא לא מצליח לישון?
      </p>
      <p style={{ fontSize: "18px", color: "#555" }}>
        סופר כבשים? לא, הוא פשוט בודק למה הלולאה לא עוצרת! 
      </p>
      <button 
        onClick={onBack} 
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
      >
        חזרה לקודם
      </button>
    </div>
  );
}