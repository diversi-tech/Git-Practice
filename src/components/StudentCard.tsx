import type { CSSProperties } from "react";
import type { CardProps } from "../types";
import styles from "./studentProfile.module.css";

type ThemeProperties = CSSProperties & {
  "--student-background": string;
  "--student-foreground": string;
  "--student-muted": string;
  "--student-accent": string;
};

export default function StudentCard({ student, onClick }: CardProps) {
  const profile = student.profile;
  if (!profile) return null;

  const theme = {
    "--student-background": profile.background,
    "--student-foreground": profile.foreground,
    "--student-muted": profile.muted,
    "--student-accent": profile.accent,
  } as ThemeProperties;

  return (
    <article className={`joke-card ${styles.card} ${styles[profile.pattern]}`} style={theme}>
      <div className={styles.icon} aria-hidden="true">{profile.icon}</div>
      {profile.artwork && <div className={styles.artwork} aria-hidden="true">{profile.artwork}</div>}
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <a className={styles.name} href={`mailto:${student.email}`}>{student.name}</a>
      <span className={styles.team}>צוות {student.teamName}</span>
      <button className={styles.action} type="button" onClick={onClick}>לבדיחה ←</button>
    </article>
  );
}
