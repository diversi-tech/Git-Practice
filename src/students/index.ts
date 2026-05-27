import { Student } from "../types";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import YaelCard from "./Yael-Refaelov/Card";
import YaelJokePage from "./Yael-Refaelov/JokePage";
import HodayaYfrachJokePage from "./Hodaya_yfrach/JokePage";
import HodayaYfrachCard from "./Hodaya_yfrach/Card";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import LaliFeeferCard from "./lali-fefer/Card";
import LaliFeeferJokePage from "./lali-fefer/JokePage";

import TamarRotanCard from "./TamarRotan/Card";
import TamarRotanJokePage from "./TamarRotan/JokePage";
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
  id: "Yael-Refaelov",
  name: "יעל רפאלוב",
  jokeTitle: "“המטרייה של ההייטק”",
  CardComponent: YaelCard,
  JokePageComponent: YaelJokePage,
},{
    id: "lali-fefer",
    name: "ללי פפר",
    jokeTitle: "Hi:)",
    CardComponent: LaliFeeferCard,
    JokePageComponent: LaliFeeferJokePage,
  },
  {
      id: "TamarRotan",
      name: "ראיונות עבודה ",
      jokeTitle: "😂 הבדיחה",
      CardComponent: TamarRotanCard,
      JokePageComponent: TamarRotanJokePage,
    },

  {
    id: "hodaya-yfrach",
    name: "הודיה יפרח",
    jokeTitle: "כולם כאלה?",
    CardComponent: HodayaYfrachCard,
    JokePageComponent: HodayaYfrachJokePage,
  }
];

export default students;
