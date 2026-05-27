import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import YaelShitritCard from "./Yael-Shitrit/Card";
import ChayaSprungCard from "./chaya-sprung/Card";
import ChayaSprungJokePage from "./chaya-sprung/JokePage";
import EfratMittelmanJokePage from "./efrat-mittelman/JokePage";
import EfratMittelmanCard from "./efrat-mittelman/Card";
import YaelShitritJokePage from "./Yael-Shitrit/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

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
  id: "chaya-sprung",
  name: "חיה שפרונג",
  jokeTitle: "בדיקת ראיה",
  CardComponent: ChayaSprungCard,
  JokePageComponent: ChayaSprungJokePage,
},
  {
    id: "chani-chanzin",
    name: "חני חנזין",
    jokeTitle: "התנין והתנינה",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },
  {
    id: "Yael-Shitrit",
    name: "יעל שטרית",
    jokeTitle: "באג במכולת",
    CardComponent: YaelShitritCard,
    JokePageComponent: YaelShitritJokePage,
  },{
    id: "efrat-mittelman",
    name: "אפרת מיטלמן",
    jokeTitle: "וירוס במחשב ",
    CardComponent: EfratMittelmanCard,
    JokePageComponent: EfratMittelmanJokePage,
  },
];

export default students;
