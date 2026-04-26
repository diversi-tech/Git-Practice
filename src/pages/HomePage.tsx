import { useNavigate } from "react-router-dom";
import students from "../students";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="home-header">
        <img src="/diversitech-logo.png" alt="Diversitech" className="home-logo" />
        <h1>PRACTICUM - 2026</h1>
        <div className="home-header-btns">
          <button className="instructions-btn" onClick={() => navigate("/instructions")}>
            📋 איך מוסיפים בדיחה?
          </button>
          <button className="instructions-btn" onClick={() => navigate("/branches")}>
            🌿 מפת הבראנצ'ים
          </button>
        </div>
      </header>
      <main className="cards-grid">
        {students.map((student) => (
          <student.CardComponent
            key={student.id}
            student={student}
            onClick={() => navigate(`/joke/${student.id}`)}
          />
        ))}
      </main>
    </div>
  );
}
