import React from "react";
import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ChavivaSeiffJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <h2>באגים מחוץ למערכת</h2>
      <p>למה מתכנתים כל כך שונאים את הטבע?</p>
      <p>כי יש שם יותר מדי באגים, ואי אפשר לעשות לזה ריסטארט.</p>
      <button onClick={onBack}>← חזרה</button>
    </div>
  );
}