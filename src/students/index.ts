import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import RachelPanetCard from "./RachelPanet/Card";
import RachelPanetJokePage from "./RachelPanet/JokePage";
import EsterLewinJokePage from "./ester-lewin/JokerPage";
import EsterLewinCard from "./ester-lewin/Card";

import YWeissCard from "./YWeiss/Card";
import YWeissJokePage from "./YWeiss/JokePage";


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
    id: "YWeiss",
    name: "יעל וייס",
    jokeTitle: "ארבעת השלבים של פיתוח חדש",
    CardComponent: YWeissCard,
    JokePageComponent: YWeissJokePage,
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
  {
  id: "ester-lewin",
  name: "אסתר לוין",
  jokeTitle: "הכובע והקוד",
  CardComponent: EsterLewinCard,
  JokePageComponent: EsterLewinJokePage,
},
  
];

export default students;
