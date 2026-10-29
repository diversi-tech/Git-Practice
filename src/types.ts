import { ComponentType } from "react";

export interface Student {
  id: string;
  name: string;
  jokeTitle: string;
  email?: string;
  teamName?: string;
  teamProjectUrl?: string;
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
