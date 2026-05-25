import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";
import HadarJokePage from "./hadar-jerafi/JokePage";
import HadarCard from "./hadar-jerafi/Card";


import ayalaKleinCard from "./shani/Card";
import ayalaKleinJokePage from "./shani/JokePage";

export const students: Student[] = [
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
    id: "ayalaklein",
    name: "שני דרבקין",
    jokeTitle: "בדיחת באגים",
    CardComponent: ayalaKleinCard,
    JokePageComponent: ayalaKleinJokePage,
  },
  id: "hadar",
  name: "הדר ג'ראפי",
  jokeTitle: "הבדיחה המשעשעת שלי",
  CardComponent: HadarCard,
  JokePageComponent: HadarJokePage,
},
];

export default students;