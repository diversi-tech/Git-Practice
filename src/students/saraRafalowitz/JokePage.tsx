import { PageProps } from "../../types";

export default function saraRafalowitzJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${"joke-page-saraRafalowitz"}`}>
      <p>בדיחת השניצל והחומוס</p>
      <p>איש אחד הלך הלך הלך נתקע בקיר בום שניצל</p>
      <p>איש אחד רצה לטוס אבל הוא פספס את הטיסה מה אכפת לו הוא לא אוהב חומוס</p>
      <button onClick={onBack}>← Back</button>
    </div>
  );
}