import { Student } from "../types";

import RivkaBengioCard from "./rivkabracha-bengio/card";
import RivkaBengioJokePage from "./rivkabracha-bengio/JokePage";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import TamarCard from "./tamar-lev/Card";
import TamarJokePage from "./tamar-lev/JokePage";

import RuthCard from "./Ruth-Mashiach/Card";
import RuthJokePage from "./Ruth-Mashiach/JokePage";

import AyalaOshriCard from "./ayala oshri/Card";
import AyalaOshriJokePage from "./ayala oshri/JokePage";

import BrachaCard from "./bracha-pappenheim/Card";
import brachaJokePage from "./bracha-pappenheim/JokePage";

import YaelCard from "./yael-shoham/Card";
import YaelJokePage from "./yael-shoham/JokePage";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort!
const students: Student[] = [
  {
    id: "rivkabracha-bengio",
    name: "רבקה בנג'יו",
    jokeTitle: "הקפה הטחון",
    CardComponent: RivkaBengioCard,
    JokePageComponent: RivkaBengioJokePage,
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
    id: "Tamar-Lev",
    name: "תמר לב",
    jokeTitle: "החושך והאור",
    CardComponent: TamarCard,
    JokePageComponent: TamarJokePage,
  },
  {
    id: "Ruth-Malka-Mashiach",
    name: "רות מלכה משיח",
    jokeTitle: "משבר זהות ברשת",
    CardComponent: RuthCard,
    JokePageComponent: RuthJokePage,
  },
  {
    id: "ayala-oshri",
    name: "אילה עושרי",
    jokeTitle: "לולאה אינסופית",
    CardComponent: AyalaOshriCard,
    JokePageComponent: AyalaOshriJokePage,
  },
  {
    id: "bracha-pappenheim",
    name: "ברכה פפנהיים",
    jokeTitle: "שלום וברכה!",
    CardComponent: BrachaCard,
    JokePageComponent: brachaJokePage,
  },
  {
    id: "Yael-Shoham",
    name: "יעל שהם",
    jokeTitle: "הילד המדבר",
    CardComponent: YaelCard,
    JokePageComponent: YaelJokePage,
  },
];

export default students;