import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import SariYagelnikCard from "./sari-yagelnik/Card";
import SariYagelnikJokePage from "./sari-yagelnik/JokePage.tsx";

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
    id: "Sari-Yagelnik",
    name: "שרי יגלניק",
    jokeTitle: "העז והדוב",
    CardComponent: SariYagelnikCard,
    JokePageComponent: SariYagelnikJokePage,
  },
  {
    id: "Sari-Yagelnik",
    name: "שרי יגלניק",
    jokeTitle: "העז והדוב",
    CardComponent: SariYagelnikCard,
    JokePageComponent: SariYagelnikJokePage,
  },
];

export default students;
