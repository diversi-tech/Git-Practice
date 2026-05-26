import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import LitalShamanovCard from "./Lital_Shamanov/Card";
import LitalShamanovJokePage from "./Lital_Shamanov/JokePage";

import MaayanCard from "./Maayan-shoukron/MaayanCard";
import MaayanJokePage from "./Maayan-shoukron/MaayanJokePage";

import SaraRafalowitzCard from "./saraRafalowitz/Card";
import SaraRafalowitzJokePage from "./saraRafalowitz/JokePage";

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
    id: "lital-shamanov",
    name: "ליטל שמנוב",
    jokeTitle: "למה מתכנתים שונאים טבע?",
    CardComponent: LitalShamanovCard,
    JokePageComponent: LitalShamanovJokePage,
  },
  {
    id: "maayan-shoukron",
    name: "מעיין שוקרון",
    jokeTitle: "החלב הצוחק",
    CardComponent: MaayanCard,
    JokePageComponent: MaayanJokePage,
  },
  {
    id: "sara-rafalowitz",
    name: "שרה רפאלוביץ'",
    jokeTitle: "השניצל והחומוס",
    CardComponent: SaraRafalowitzCard,
    JokePageComponent: SaraRafalowitzJokePage,
  },
];

export default students;