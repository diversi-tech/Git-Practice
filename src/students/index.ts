import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import EtiMunkCard from "./Eti-Munk/Card";
import EtiMunkJokePage from "./Eti-Munk/JokePage";

import MaayanCard from "./Maayan-Babahanov/Card";
import MaayanJokePage from "./Maayan-Babahanov/JokePage";

import zehaviJokePage from "./zehavi-gerlitz/JokePage";
import zehaviCard from "./zehavi-gerlitz/card";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort!
const students: Student[] = [
  {
    id: "Maayan-Babahanov",
    name: "מעיין בבחנוב",
    jokeTitle: "שיעור מחשבים 💻",
    CardComponent: MaayanCard,
    JokePageComponent: MaayanJokePage,
  },
  {
    id: "zehavi-gerlitz",
    name: "זהבי גרליץ",
    jokeTitle: "כעכים או כאחים?",
    CardComponent: zehaviCard,
    JokePageComponent: zehaviJokePage,
  },
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
    id: "Eti Munk",
    name: "אתי מונק",
    jokeTitle: "לאכל עם כף ",
    CardComponent: EtiMunkCard,
    JokePageComponent: EtiMunkJokePage,
  },
];

export default students;
