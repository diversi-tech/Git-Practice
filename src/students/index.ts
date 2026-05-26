import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import RachelWeinbergerJokePage from "./rachel-weinberger/JokePage";
import RachelWeinbergerCard from "./rachel-weinberger/Card";

import ShaniCard from "./Shani-Mishaely/Card";
import ShaniJokePage from "./Shani-Mishaely/JokePage";
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
    id: "rachel-weinberger",
    name: "רחלי וינברגר",
    jokeTitle: "כפית אחת יותר מדי",
    CardComponent: RachelWeinbergerCard,
    JokePageComponent: RachelWeinbergerJokePage,
  },
  {
    id: "Shani-Mishaely",
    name: "שני מישאלי",
    jokeTitle: "סודות של קירות... 🧱",
    CardComponent: ShaniCard,
    JokePageComponent: ShaniJokePage,
  },
];

export default students;
