 import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import TovaCard from "./tovi/Card";
import TovaJokePage from "./tovi/JokePage";
import TovaJokePage2 from "./tovi/JokePage2";

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
    id: "tovi",
    name: "טובה",
    jokeTitle: "למה האופניים נפלו?",
    CardComponent: TovaCard,
    JokePageComponent: TovaJokePage,
  },
  {
    id: "tovi-2",
    name: "טובה",
    jokeTitle: "Why did the scarecrow win an award?",
    CardComponent: TovaCard,
    JokePageComponent: TovaJokePage2,
  },
];

export default students;