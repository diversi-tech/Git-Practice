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
    jokeTitle: "Scarecrow Award",
    email: "t0556746399@gmail.com",
    teamName: "Vcomm-1",
    teamProjectUrl: "",
    CardComponent: TovaCard,
    JokePageComponent: TovaJokePage2,
  },
  {
    id: "tovi",
    name: "טובה",
    jokeTitle: "אופניים עייפים",
    email: "t0556746399@gmail.com",
    teamName: "Vcomm-1",
    teamProjectUrl: "",
    CardComponent: TovaCard,
    JokePageComponent: TovaJokePage,
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
