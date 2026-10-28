import { Student } from "../types";

import TovaCard from "./tovi/Card";
import TovaJokePage from "./tovi/JokePage";
import TovaJokePage2 from "./tovi/JokePage2";
import MaayanCard from "./maayan/Card";
import MaayanJokePage from "./maayan/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  {
    id: "tovi-2",
    name: "טובה",
    jokeTitle: "The Award-Winning Scarecrow",
    CardComponent: TovaCard,
    JokePageComponent: TovaJokePage2,
  },
  {
    id: "tovi",
    name: "טובה",
    jokeTitle: "למה האופניים נפלו?",
    CardComponent: TovaCard,
    JokePageComponent: TovaJokePage,
  },
  {
    id: "Maayan-Bukrits",
    name: "מעיין בוקריץ",
    jokeTitle: "מתכנתים",
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
