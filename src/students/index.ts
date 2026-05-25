import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
<<<<<<< HEAD
import AyeletCard from "./Ayelet/Card";
import AyeletJokePage from "./Ayelet/JokePage";
=======
import RachelPanetCard from "./RachelPanet/Card";
import RachelPanetJokePage from "./RachelPanet/JokePage";
import EsterLewinJokePage from "./ester-lewin/JokerPage";
import EsterLewinCard from "./ester-lewin/Card";

>>>>>>> 2a90df4b4b21e37b345b643a75655a420ff34b64

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
  },    {
    id: "Rachel-Panet",
    name: "רחלי פנט",
    jokeTitle: "האצבע השבורה",
    CardComponent: RachelPanetCard,
    JokePageComponent: RachelPanetJokePage,
  },
<<<<<<< HEAD
  
{
  id: "Ayelet",
  name: "איילת דלויה",
  jokeTitle: "הסיבה האמיתית למה הקוד שלך עובד (ולמה עדיף שלא תיגע בו יותר) 🛑",
  CardComponent: AyeletCard,
  JokePageComponent: AyeletJokePage,
},
=======
  {
  id: "ester-lewin",
  name: "אסתר לוין",
  jokeTitle: "הכובע והקוד",
  CardComponent: EsterLewinCard,
  JokePageComponent: EsterLewinJokePage,
},
  
>>>>>>> 2a90df4b4b21e37b345b643a75655a420ff34b64
];

export default students;
