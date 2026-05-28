import { Student } from "../types";

import YaelOrdmanCard from "./yael-ordman/Card";
import YaelOrdmanJokePage from "./yael-ordman/JokePage";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

// מייבא את הקומפוננטות שלך
import SheviShapiraCard from "./shevi-shapira/Card";
import SheviShapiraJokePage from "./shevi-shapira/JokePage";

import ChayaSprungJokePage from "./chaya-sprung/JokePage";
import ChayaSprungCard from "./chaya-sprung/Card";

import  efratMittelmanCard from "./efrat-mittelman/Card";
import efratMittelmanJokePage from "./efrat-mittelman/JokePage";



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
    id: "efrat-mittelman",
    name: "אפרת מיטלמן",
    jokeTitle: "וירוס במחשב ",
    CardComponent: efratMittelmanCard,
    JokePageComponent: efratMittelmanJokePage,
  },
  {
  id: "shevi-shapira",
  name: "שבי שפירא",
  jokeTitle: "אלגוריתם בסופרמרקט 🛒", // הכותרת החדשה והמתאימה
  CardComponent: SheviShapiraCard,
  JokePageComponent: SheviShapiraJokePage,
},
];

export default students;