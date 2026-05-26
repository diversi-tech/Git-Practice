import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import saraRafalowitzCard from "./saraRafalowitz/Card";
import saraRafalowitzJokePage from "./saraRafalowitz/JokePage";

import MaayanCard from "./Maayan-shoukron/MaayanCard";
import MaayanJokePage from "./Maayan-shoukron/MaayanJokePage";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort! 
const students: Student[] = [
  {
    id: "dana-duvi",
    name: "דנה דובי",
    jokeTitle: "הדוב הפחדן",
    CardComponent: DanaDuviCard,
    JokePageComponent: DanaDuviJokePage,
  },
  {
    id: "chani-chanzin",
    name: "חני חנזין",
    jokeTitle: "התנין והתנינה",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },
  {
    id: "sara-rafalowitz",
    name: "שרה רפאלוביץ'",
    jokeTitle: "השניצל והחומוס",
    CardComponent: saraRafalowitzCard,
    JokePageComponent: saraRafalowitzJokePage,
  },
  {
    id: "Maayan shoukron",
    name: "מעיין שוקרון",
    jokeTitle: "החלב הצוחק",
    CardComponent: MaayanCard,
    JokePageComponent: MaayanJokePage,
  }
];

export default students;
