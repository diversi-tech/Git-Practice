# 😄 Practicum Jokes — Git Collaboration Practice Project

A learning project for Diversitech Practicum 2026 students. The project teaches parallel Git workflows, pull-request review, conflict resolution, and staged promotion through a branch hierarchy.

Each student adds a joke card and a full joke page on a personal branch. Changes move upward only after the prospective merge has been previewed and approved.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## Project structure

```text
src/
├── students/
│   ├── index.ts               # Student registry; newest entries first
│   ├── [student-name]/
│   │   ├── Card.tsx           # Homepage card
│   │   ├── JokePage.tsx       # Full joke page
│   │   └── styles.module.css  # Student-specific CSS Module
│   └── ...
├── pages/
│   ├── HomePage.tsx
│   ├── JokePage.tsx
│   ├── InstructionsPage.tsx
│   └── BranchesPage.tsx
├── generated/
│   └── branches.ts
├── types.ts
└── App.tsx
scripts/
└── gen-branches.cjs
```

## Branch hierarchy

The repository uses the following promotion path:

```text
master
└── [team]                    # Example: Vcomm
    └── [subteam]             # Example: Vcomm_1
        └── [student branch]
```

Use the exact team and subteam branch names assigned to you. The hierarchy matters more than a specific personal-branch naming convention.

Changes merge from the bottom upward:

1. Student branch → assigned subteam branch.
2. Subteam branch → team branch.
3. Team branch → `master`.

Do not open a student PR directly against the team branch or `master`.

## Adding a joke

### 1. Create a personal branch

Start from the latest version of your assigned subteam branch:

```bash
git checkout [subteam-branch]
git pull origin [subteam-branch]
git checkout -b [personal-branch]
```

### 2. Create the student files

```text
src/students/[your-name-in-english]/
├── Card.tsx
├── JokePage.tsx
└── styles.module.css
```

Use generic CSS Module class names such as `.card`, `.title`, and `.name`. Vite scopes them automatically, so class names must not contain the student's name.

### 3. Build the card

Every card must contain:

- an icon or image;
- a short title that remains on one line;
- the student's name as a hidden-email `mailto:` link;
- the exact subteam name;
- a separate button that opens the joke.

The card itself must not be clickable because it would intercept the email link.

```tsx
import styles from "./styles.module.css";
import { CardProps } from "../../types";

export default function YourNameCard({ student, onClick }: CardProps) {
  return (
    <div className={`joke-card ${styles.card}`}>
      <span className={styles.icon} aria-hidden="true">😄</span>
      <h2 className={styles.title}>{student.jokeTitle}</h2>
      <a className={styles.name} href={`mailto:${student.email}`}>
        {student.name}
      </a>
      {student.teamProjectUrl ? (
        <a className={styles.team} href={student.teamProjectUrl}>
          צוות {student.teamName}
        </a>
      ) : (
        <span className={styles.team}>צוות {student.teamName}</span>
      )}
      <button className={styles.action} type="button" onClick={onClick}>
        לבדיחה ←
      </button>
    </div>
  );
}
```

The visible text is the student's name, not the email address. The name must be underlined only on hover.

```css
.card {
  cursor: default;
}

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.name {
  text-decoration: none;
}

.name:hover {
  text-decoration: underline;
}
```

### 4. Build the full joke page

The joke page must display the complete joke, including its setup and punchline. Its colors should match the card.

```tsx
import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function YourNameJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <p>Joke setup</p>
      <p>Joke punchline</p>
      <button type="button" onClick={onBack}>← חזרה</button>
    </div>
  );
}
```

### 5. Register the student

Import the card and joke-page components in `src/students/index.ts`, then add the new object at the beginning of the `students` array. Entries stay in newest-first order.

```ts
{
  id: "[your-name-in-english]",
  name: "[full name]",
  jokeTitle: "[short one-line title]",
  email: "[email address]",
  teamName: "[exact subteam name]",
  teamProjectUrl: "",
  CardComponent: YourNameCard,
  JokePageComponent: YourNameJokePage,
},
```

Keep `teamProjectUrl: ""` until a project URL exists. The card renders plain team text while the field is empty and can render a link later without changing the data shape.

### 6. Verify, commit, and push

```bash
npm run build
git add src/students/[your-name-in-english]/ src/students/index.ts
git commit -m "add: [your name] joke"
git push -u origin [personal-branch]
```

## Preview and approval workflow

Every PR must be reviewed as a prospective merge before it is merged.

1. Open the PR against the next branch in the hierarchy.
2. Wait for the **Pull Request Preview** workflow to pass.
3. Open the GitHub Pages link posted by the preview bot.
4. Check the card, email link, team label, joke button, full joke page, colors, and title layout.
5. Obtain explicit approval.
6. Merge only the approved PR.
7. Delete the source branch only after GitHub confirms the merge.

The preview URL follows this format:

```text
https://diversi-tech.github.io/Git-Practice/pr-preview/pr-[PR-number]/
```

If one PR is merged while other PRs target the same branch, synchronize each remaining source branch with the updated target, resolve `src/students/index.ts` in newest-first order, run the build, push, and review the regenerated preview. Do not rely on a preview created against an outdated target branch.

The same rule applies when promoting subteams into a team: merge and verify one PR at a time, then update the next PR before approving it.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server and regenerate branch data |
| `npm run build` | Run the production build |
| `npm run gen-branches` | Regenerate `src/generated/branches.ts` |

The branch generator reads local Git data and identifies parent branches with `git merge-base`; it does not depend on a branch naming convention.

## Tech stack

- React 18 and TypeScript
- Vite 5
- React Router 6
- CSS Modules
- GitHub Actions and GitHub Pages PR previews
