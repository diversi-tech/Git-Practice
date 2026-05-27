import { Student } from "../types";

import MaayanCard from "./Maayan-Babahanov/Card";
import MaayanJokePage from "./Maayan-Babahanov/JokePage";

import zehaviCard from "./zehavi-gerlitz/card";
import zehaviJokePage from "./zehavi-gerlitz/JokePage";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import avigailCard from "./Avigail/Card";
import avigailJokePage from "./Avigail/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import EtiMunkCard from "./Eti-Munk/Card";
import EtiMunkJokePage from "./Eti-Munk/JokePage";

import chanaMoshayevCard from "./chanaMoshayev/Card";
import ChanaMoshayevJokePage from "./chanaMoshayev/JokePage";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort!
const students: Student[] = [
  {
    id: "Maayan-Babahanov",
    name: "מעיין בבחנוב",
    jokeTitle: "שיעור מחשבים 💻",
    CardComponent: MaayanCard,
    JokePageComponent: MaayanJokePage,
  },
  {
    id: "zehavi-gerlitz",
    name: "זהבי גרליץ",
    jokeTitle: "כעכים או כאחים?",
    CardComponent: zehaviCard,
    JokePageComponent: zehaviJokePage,
  },
  {
    id: "dana-duvi",
    name: "דנה דובי",
    jokeTitle: "הדוב הפחדן",
    CardComponent: DanaDuviCard,
    JokePageComponent: DanaDuviJokePage,
  },
  {
    id: "avigail-hagoli",
    name: "אביגיל חגולי",
    jokeTitle: "החתול המדבר",
    CardComponent: avigailCard,
    JokePageComponent: avigailJokePage,
  },
  {
    id: "chani-chanzin",
    name: "חני חנזין",
    jokeTitle: "התנין והתנינה",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },
  {
    id: "Eti Munk",
    name: "אתי מונק",
    jokeTitle: "לאכל עם כף ",
    CardComponent: EtiMunkCard,
    JokePageComponent: EtiMunkJokePage,
  },
  {
    id: "chana-moshayev",
    name: "חנה מושייב",
    jokeTitle: "המחשב החולה",
    CardComponent: chanaMoshayevCard,
    JokePageComponent: ChanaMoshayevJokePage,
  },
];

export default students;
