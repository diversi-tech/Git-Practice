import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import OritJokePage from "./orit-zadok/JokePage";
import OritCard from "./orit-zadok/Card";

import NoaMegeraCard from "./noa-megera/Card";
import NoaMegeraJokePage from "./noa-megera/JokePage";
import EfratAbukasisCard from "./efrat-abukasis/Card";
import EfratAbukasisJokePage from "./efrat-abukasis/JokePage";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort! 
const students: Student[] = [
  {
  id: "efrat-abukasis",
  name: "אפרת אבוקסיס",
  jokeTitle: "המחשב העייף",
  CardComponent: EfratAbukasisCard,
  JokePageComponent: EfratAbukasisJokePage,
  },
  {
  id: "orit zadok",
  name: "אורית צדוק",
  jokeTitle: "המתכנת שנשלח לסופר",
  CardComponent: OritCard,
  JokePageComponent: OritJokePage,
  },
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
    id: "noa-megera",
    name: "נועה מגירה",
    jokeTitle: "באג חברתי",
    CardComponent: NoaMegeraCard,
    JokePageComponent: NoaMegeraJokePage,
  },
];

export default students;
