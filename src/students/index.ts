import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import yaelihainCard from "./yaeli-hain/Card";
import yaelihainJokePage from "./yaeli-hain/JokePage";

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
  id: "yaeli-hain ",
  name: "יעלי היין",
  jokeTitle:"באגים",
  CardComponent: yaelihainCard,
  JokePageComponent: yaelihainJokePage,
},
  
{
  id: "sara-levin",
  name: "שרה לוין",
  jokeTitle: "אמא של מתכנתים",
  CardComponent: SaraLevinCard,
  JokePageComponent: SaraLevinJokePage,

},
  
  {
  id: "yaeli-rosner",
  name: "יעלי רוזנר",
  jokeTitle: "מה קרה למרק???",
  CardComponent: yaeliCard,
  JokePageComponent: yaeliJokePage,
  }

];

export default students;
