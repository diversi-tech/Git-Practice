import { CSSProperties } from "react";
import { CardProps } from "../../types";
import { solaProfiles } from "./solaProfiles";
import styles from "./sola.module.css";

type ThemeProperties = CSSProperties & {
  "--sola-background": string;
  "--sola-foreground": string;
  "--sola-muted": string;
  "--sola-accent": string;
};

export default function SolaCard({ student, onClick }: CardProps) {
  const profile = solaProfiles[student.id];
  const theme = {
    "--sola-background": profile.background,
    "--sola-foreground": profile.foreground,
    "--sola-muted": profile.muted,
    "--sola-accent": profile.accent,
  } as ThemeProperties;

  return (
    <article className={`joke-card ${styles.card}`} style={theme}>
      <div className={styles.icon} aria-hidden="true">{profile.icon}</div>
      {profile.artwork && <div className={styles.artwork} aria-hidden="true">{profile.artwork}</div>}
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <a className={styles.name} href={`mailto:${student.email}`}>{student.name}</a>
      <span className={styles.team}>צוות {student.teamName}</span>
      <button className={styles.action} type="button" onClick={onClick}>לבדיחה ←</button>
    </article>
  );
}
