import type { CSSProperties } from "react";
import type { PageProps } from "../types";
import styles from "./studentProfile.module.css";

type ThemeProperties = CSSProperties & {
  "--student-background": string;
  "--student-foreground": string;
  "--student-muted": string;
  "--student-accent": string;
};

export default function StudentJokePage({ student, onBack }: PageProps) {
  const profile = student?.profile;
  if (!student || !profile) return null;

  const theme = {
    "--student-background": profile.background,
    "--student-foreground": profile.foreground,
    "--student-muted": profile.muted,
    "--student-accent": profile.accent,
  } as ThemeProperties;

  return (
    <main className={`joke-page ${styles.page}`} style={theme}>
      <section className={`${styles.jokePanel} ${styles[profile.pattern]}`}>
        <div className={styles.pageIcon} aria-hidden="true">{profile.icon}</div>
        {profile.artwork && <div className={styles.pageArtwork} aria-hidden="true">{profile.artwork}</div>}
        <p className={styles.eyebrow}>{student.name} · {student.teamName}</p>
        <h1 className={styles.pageTitle}>{student.jokeTitle}</h1>
        <div className={styles.jokeContent}>{profile.joke}</div>
        <button className={styles.backButton} type="button" onClick={onBack}>חזרה לכל הבדיחות ←</button>
      </section>
    </main>
  );
}
