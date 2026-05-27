import { Student } from "../types";
import TamarZwiebelCard from "./Tamar-Zwiebel/Card";
import TamarZwiebelJokePage from "./Tamar-Zwiebel/JokePage";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import hadasCard from "./hadas/Card";
import hadasPage from "./hadas/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import TamarDamtiCard from "./tamar-damti/Card";
import TamarDamtiJokePage from "./tamar-damti/JokePage";

import YehuditCard from "./yehudit vagshal/Card";
import YehuditJokePage from "./yehudit vagshal/JokePage";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
const students: Student[] = [
  {
    id: "dana-duvi",
    name: "דנה דובי",
    jokeTitle: "הדוב הפחדן",
    CardComponent: DanaDuviCard,
    JokePageComponent: DanaDuviJokePage,
  },
    {
    id: "tamar-damti",
    name: "תמר דמתי",
    jokeTitle: "הבננה",
    CardComponent: TamarDamtiCard,
    JokePageComponent: TamarDamtiJokePage,
  },
  {
    id: "yehudit",
    name: "יהודית וגשל",
    jokeTitle: "כוסות מים",
    CardComponent: YehuditCard,
    JokePageComponent: YehuditJokePage,
  },
  {
    id: "hadas",
    name: "הדס חומרי",
    jokeTitle: "סכנת התקררות❄️",
    CardComponent: hadasCard,
    JokePageComponent: hadasPage,
  },
  {
    id: "chani-chanzin",
    name: "חני חנזין",
    jokeTitle: "התנין והתנינה",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },
  {
    id: "Tamar_zwiebel",
    name: "תמר צויבל",
    jokeTitle: "לא באחריותי! 🛑",
    CardComponent: TamarZwiebelCard,
    JokePageComponent: TamarZwiebelJokePage,
  },
];
export default students;