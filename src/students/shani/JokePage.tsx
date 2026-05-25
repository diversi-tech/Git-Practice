import React from "react";
import { PageProps } from "../../types";

export default function ayalaKleinJokePage({ onBack }: PageProps) {
  return (
    <div style={{ padding: "20px" }}>
      <p>למה מתכנתים מעדיפים מצב חשוך?</p>
      <p>כי האור מושך באגים!</p>
      <button onClick={onBack}>חזרה</button>
    </div>
  );
}