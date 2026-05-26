import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import YaelCard from "./yael-shoham/Card";
import YaelJokePage from "./yael-shoham/JokePage";

import AyalaOshriCard from "./ayala oshri/Card";
import AyalaOshriJokePage from "./ayala oshri/JokePage";

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
  id: "Yael-Shoham",
  name: "יעל שהם",
  jokeTitle: "הילד המדבר",
  CardComponent: YaelCard,
  JokePageComponent: YaelJokePage,
},
  {
    id: "chani-chanzin",
    name: "חני חנזין",
    jokeTitle: "התנין והתנינה",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },
  {
    id: "ayala-oshri",
    name: "אילה עושרי",
    jokeTitle: "לולאה אינסופית",
    CardComponent: AyalaOshriCard,
    JokePageComponent: AyalaOshriJokePage,
  }
];

export default students;
