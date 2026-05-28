import { Student } from "../types";

import YaelOrdmanCard from "./yael-ordman/Card";
import YaelOrdmanJokePage from "./yael-ordman/JokePage";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import YaelShitritCard from "./Yael-Shitrit/Card";
import YaelShitritJokePage from "./Yael-Shitrit/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort! 
const students: Student[] = [
  {
    id: "yael-ordman",
    name: "יעל אורדמן",
    jokeTitle: "רקורסיה",//מה ההגדרה המילונית של רקורסיה? עיין ערך רקורסיה... חחח
    CardComponent: YaelOrdmanCard,
    JokePageComponent: YaelOrdmanJokePage,
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
  }
];

export default students;
