import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import students from "../students";

function getTeamName(subteamName?: string) {
  return subteamName?.replace(/[-_]\d+$/, "") ?? "";
}

export default function HomePage() {
  const navigate = useNavigate();
  const [team, setTeam] = useState("");
  const [subteam, setSubteam] = useState("");
  const [name, setName] = useState("");

  const teams = useMemo(
    () => [...new Set(students.map((student) => getTeamName(student.teamName)).filter(Boolean))].sort(),
    [],
  );

  const subteams = useMemo(
    () => [
      ...new Set(
        students
          .filter((student) => !team || getTeamName(student.teamName) === team)
          .map((student) => student.teamName)
          .filter((value): value is string => Boolean(value)),
      ),
    ].sort(),
    [team],
  );

  const normalizedName = name.trim().toLocaleLowerCase("he");
  const filteredStudents = students.filter((student) =>
    (!team || getTeamName(student.teamName) === team) &&
    (!subteam || student.teamName === subteam) &&
    (!normalizedName || student.name.toLocaleLowerCase("he").includes(normalizedName)),
  );

  return (
    <div className="home-page">
      <header className="home-header">
        <img src={`${import.meta.env.BASE_URL}diversitech-logo.png`} alt="Diversitech" className="home-logo" />
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

      <section className="student-filters" aria-label="סינון תלמידות">
        <label>
          <span>צוות</span>
          <select
            value={team}
            onChange={(event) => {
              setTeam(event.target.value);
              setSubteam("");
              setName("");
            }}
          >
            <option value="">הכול</option>
            {teams.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>

        <label>
          <span>תת-צוות</span>
          <select
            value={subteam}
            onChange={(event) => {
              setSubteam(event.target.value);
              setName("");
            }}
          >
            <option value="">הכול</option>
            {subteams.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>

        <label>
          <span>שם</span>
          <input
            type="search"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="off"
          />
        </label>
      </section>

      {filteredStudents.length > 0 ? (
        <main className="cards-grid">
          {filteredStudents.map((student) => (
            <student.CardComponent
              key={student.id}
              student={student}
              onClick={() => navigate(`/joke/${student.id}`)}
            />
          ))}
        </main>
      ) : (
        <p className="student-filters-empty">לא נמצאו בדיחות מתאימות.</p>
      )}
    </div>
  );
}
