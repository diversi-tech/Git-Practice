import { Student } from "../types";

import RivkaCard from "./Rivka/Card";
import RivkaJokePage from "./Rivka/JokePage";
import MaayanCard from "./maayan/Card";
import MaayanJokePage from "./maayan/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  {
    id: "rivka-barashi",
    name: "Rivka Barashi",
    jokeTitle: "Computer Doctor",
    email: "rb0583252581@gmail.com",
    teamName: "Vcomm-1",
    teamProjectUrl: "",
    CardComponent: RivkaCard,
    JokePageComponent: RivkaJokePage,
  },
  {
    id: "Maayan-Bukrits",
    name: "מעיין בוקריץ",
    jokeTitle: "מתכנתים",
    email: "215746686@zzv.org.il",
    teamName: "Vcomm-1",
    teamProjectUrl: "",
    CardComponent: MaayanCard,
    JokePageComponent: MaayanJokePage,
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
];

export default students;
