import { CardProps } from "../../types";

export default function NoaCard({ student, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="joke-card"
      style={{
        border: "1px solid #e0e0e0",
        padding: "18px",
        borderRadius: "10px",
        cursor: "pointer",
        margin: "12px",
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      // אפקט Hover נחמד:
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <h2 style={{ margin: "0 0 10px 0", color: "#333", fontSize: "1.3rem" }}>{student.jokeTitle}</h2>
      <p style={{ margin: 0, color: "#1a5fb4", fontSize: "0.9rem", fontWeight: "600" }}>{student.name}</p>
    </div>
  );
}