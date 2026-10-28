import { Student } from "../types";

import HillaCard from "./Hilla-Arye/Card";
import HillaJokePage from "./Hilla-Arye/JokePage";
import MaayanCard from "./maayan/Card";
import MaayanJokePage from "./maayan/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  {
    id: "hilla-arye",
    name: "הילה אריה",
    jokeTitle: "Dark Mode",
    CardComponent: HillaCard,
    JokePageComponent: HillaJokePage,
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
