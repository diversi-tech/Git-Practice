import { CardProps } from "../../types";
import styles from "./solaCard.module.css";

interface SolaCardTheme {
  icon: string;
  background: string;
  foreground: string;
  accent: string;
}

export default function createSolaCard(theme: SolaCardTheme) {
  return function SolaStudentCard({ student, onClick }: CardProps) {
    return (
      <div
        className={`joke-card ${styles.card}`}
        style={{ background: theme.background, color: theme.foreground, borderColor: theme.accent }}
      >
        <span className={styles.icon} aria-hidden="true">{theme.icon}</span>
        <h2 className={styles.title}>{student.jokeTitle}</h2>
        <a className={styles.name} style={{ color: theme.accent }} href={`mailto:${student.email}`}>
          {student.name}
        </a>
        {student.teamProjectUrl ? (
          <a className={styles.team} style={{ color: theme.accent }} href={student.teamProjectUrl}>
            צוות {student.teamName}
          </a>
        ) : (
          <span className={styles.team} style={{ color: theme.accent }}>צוות {student.teamName}</span>
        )}
        <button
          className={styles.action}
          style={{ background: theme.accent, color: theme.foreground }}
          type="button"
          onClick={onClick}
        >
          לבדיחה ←
        </button>
      </div>
    );
  };
}
