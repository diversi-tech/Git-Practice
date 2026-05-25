import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
<<<<<<< HEAD
import MaayanCardCard from "./maayan/Card";
import MaayanJokePage from "./maayan/JokePage";
=======
import MaayanJokePage from "./maayan/JokePage";
import MaayanCard from "./maayan/Card";
>>>>>>> Maayan-Bukrits

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
<<<<<<< HEAD

  {
  id: "Maayan-Bukrits",
  name: "מעיין בוקריץ",
  jokeTitle: "מתכנתים",
  CardComponent: MaayanCardCard,
  JokePageComponent: MaayanJokePage,
},
=======
    {
    id: "Maayan-Bukrits",
    name: "מעיין בוקריץ",
    jokeTitle: "מתכנתים",
    CardComponent: MaayanCard,
    JokePageComponent: MaayanJokePage,
  },
>>>>>>> Maayan-Bukrits
];

export default students;
