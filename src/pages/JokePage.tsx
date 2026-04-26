import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import students from "../students";

export default function JokePage() {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();
  const student = students.find((s) => s.id === studentId);

  useEffect(() => {
    if (student) {
      document.title = `${student.name} — ${student.jokeTitle}`;
      return () => {
        document.title = "PRACTIUM";
      };
    }
  }, [student]);

  if (!student) {
    return (
      <div className="not-found">
        <h1>😕 תלמידה לא נמצאה</h1>
        <p>המזהה "{studentId}" אינו קיים ברשימה.</p>
      </div>
    );
  }

  return (
    <student.JokePageComponent
      onBack={() => navigate(-1)}
    />
  );
}
