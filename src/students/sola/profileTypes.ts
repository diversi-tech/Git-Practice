import type { ReactNode } from "react";

export type SolaPattern = "dots" | "glow" | "grid" | "stripes" | "rays" | "clean";

export interface SolaProfile {
  icon: string;
  pattern: SolaPattern;
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  artwork?: ReactNode;
  joke: ReactNode;
}
