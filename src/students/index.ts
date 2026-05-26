import { Student } from "../types";

import YaelCard from "./yael-yosef/Card"; 
import YaelJokePage from "./yael-yosef/JokePage";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import efratJokePage from "./efrat-posen/JokePage";
import efratCard from "./efrat-posen/card";
import HadasJokePage from "./hadas-kohavi/JokePage";
import HadasCard from "./hadas-kohavi/Card";


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
    id: "hadas-kohavi",
    name: "הדס כוכבי",
    jokeTitle: "כוס קפה",
    CardComponent: HadasCard,
    JokePageComponent: HadasJokePage,
  },
   {
  id: "efrat-posen",
  name: "אפרת פוזן",
  jokeTitle: "הבדיחה הכי מצחיקה",
  CardComponent: efratCard,
  JokePageComponent: efratJokePage,
},
{
  id: "yael-yosef",
  name: "יעל יוסף",
  jokeTitle: "חמש שקלים בכיס",
  CardComponent: YaelCard,
  JokePageComponent: YaelJokePage,
},
];

export default students;
