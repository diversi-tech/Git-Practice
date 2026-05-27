import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import RutiCard from "./ruti-paniri/Card";
import RutiJokePage from "./ruti-paniri/JokePage";

import ShiraCarmiJokePage from "./shira-carmi/JokePage";
import ShiraCarmiCard from "./shira-carmi/Card";

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
    id: "shira-carmi",
    name: "שירה כרמי",
    jokeTitle: "המפתחים וה-Git",
    CardComponent: ShiraCarmiCard,
    JokePageComponent: ShiraCarmiJokePage,
  },
  {
  id: "Ruti-Paniri",
  name: "רותי פנירי",
  jokeTitle: "המחשב העקשן",
  CardComponent: RutiCard,
  JokePageComponent: RutiJokePage,
},

];

export default students;
