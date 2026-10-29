import { CSSProperties } from "react";
import { PageProps } from "../../types";
import { solaProfiles } from "./solaProfiles";
import styles from "./sola.module.css";

type ThemeProperties = CSSProperties & {
  "--sola-background": string;
  "--sola-foreground": string;
  "--sola-muted": string;
  "--sola-accent": string;
};

export default function SolaJokePage({ student, onBack }: PageProps) {
  if (!student) return null;

  const profile = solaProfiles[student.id];
  const theme = {
    "--sola-background": profile.background,
    "--sola-foreground": profile.foreground,
    "--sola-muted": profile.muted,
    "--sola-accent": profile.accent,
  } as ThemeProperties;

  return (
    <main className={`joke-page ${styles.page}`} style={theme}>
      <section className={styles.jokePanel}>
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
