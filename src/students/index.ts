import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import EtiMunkCard from "./Eti-Munk/Card";
import EtiMunkJokePage from "./Eti-Munk/JokePage";
import ChanaMoshayevJokePage from "./chanaMoshayev/JokePage";
import chanaMoshayevCard from "./chanaMoshayev/Card";

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
    id: "Eti Munk",
    name: "אתי מונק",
    jokeTitle: "לאכל עם כף ",
    CardComponent: EtiMunkCard,
    JokePageComponent: EtiMunkJokePage,
  },
  {
    id: "chana-moshayev",
    name: "חנה מושייב",
    jokeTitle: "המחשב החולה",
    CardComponent: chanaMoshayevCard,
    JokePageComponent: ChanaMoshayevJokePage,
  },
];

export default students;
