import { CardProps } from "../../types";

export default function ayalaKleinCard({ student, onClick }: CardProps) {
  return (
    <div onClick={onClick} style={{ border: "1px solid #ccc", padding: "10px", cursor: "pointer" }}>
      <h2>{student.jokeTitle}</h2>
      <p>{student.name}</p>
    </div>
  );
}