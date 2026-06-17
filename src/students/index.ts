import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import ayalaKleinCard from "./ayalaklein/Card";
import ayalaKleinJokePage from "./ayalaklein/JokePage";

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
    name: "אילה קליין",
    jokeTitle: "בדיחת באגים",
    CardComponent: ayalaKleinCard,
    JokePageComponent: ayalaKleinJokePage,
  },
];

export default students;