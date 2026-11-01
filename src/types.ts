import type { ComponentType, ReactNode } from "react";

export type StudentProfilePattern = "dots" | "glow" | "grid" | "stripes" | "rays" | "clean";

export interface StudentProfile {
  icon: string;
  pattern: StudentProfilePattern;
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  artwork?: ReactNode;
  joke: ReactNode;
}

export interface Student {
  id: string;
  name: string;
  jokeTitle: string;
  email?: string;
  teamName?: string;
  teamProjectUrl?: string;
  profile?: StudentProfile;
  CardComponent: ComponentType<CardProps>;
  JokePageComponent: ComponentType<PageProps>;
}

export interface CardProps {
  student: Student;
  onClick: () => void;
}

export interface PageProps {
  onBack: () => void;
  student?: Student;
}

// Branch graph types
export interface BranchEntry {
  name: string;
  parentBranch: string | null;
  shortHash: string;
  lastCommitMessage: string;
  isMergedIntoParent: boolean;
  isCurrent: boolean;
}

export interface BranchData {
  generatedAt: string;
  currentBranch: string;
  mainBranch: string;
  branches: BranchEntry[];
}
