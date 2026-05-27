import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import YehuditBJokePage from "./YehuditB/JokePage";
import YehuditBCard from "./YehuditB/Card";

import yaelihainCard from "./yaeli-hain/Card";
import yaelihainJokePage from "./yaeli-hain/JokePage";

import saralevinCard from "./sara-levin/Card";
import saralevinJokePage from "./sara-levin/JokePage";

import EfratMadmonCard from "./Efrat-Madmon/Card";
import EfratMadmonJokePage from "./Efrat-Madmon/JokePage";

import yaelirosnerCard from "./yaeli-rosner/Card";
import yaelirosnerJokePage from "./yaeli-rosner/JokePage";


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

    id: "Yehudit",
    name: "יהודית בירמן",
    jokeTitle: "לאן הגיע הפינגווין???",
    CardComponent: YehuditBCard,
    JokePageComponent: YehuditBJokePage,
  },
{
  id: "yaeli-hain",
  name: "יעלי היין",
  jokeTitle:"באגים",
  CardComponent: yaelihainCard,
  JokePageComponent: yaelihainJokePage,
},
  
{
  id: "sara-levin",
  name: "שרה לוין",
  jokeTitle: "אמא של מתכנתים",
  CardComponent: saralevinCard,
  JokePageComponent: saralevinJokePage,

},

{
  id: "Efrat-Madmon",
  name: "אפרת מדמון",
  jokeTitle: "עשרה שקלים",
  CardComponent: EfratMadmonCard,
  JokePageComponent: EfratMadmonJokePage,
},
  
  {
  id: "yaeli-rosner",
  name: "יעלי רוזנר",
  jokeTitle: "מה קרה למרק???",
  CardComponent: yaelirosnerCard,
  JokePageComponent: yaelirosnerJokePage,
  }


];

export default students;
