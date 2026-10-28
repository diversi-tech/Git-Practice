import { Student } from "../types";

import HillaCard2 from "./Hilla-Arye-2/Card";
import HillaJokePage2 from "./Hilla-Arye-2/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  {
    id: "hilla-arye-2",
    name: "הילה אריה",
    jokeTitle: "מנקה יסודי",
    email: "yaeli.rosner@gmail.com",
    teamName: "Vcomm",
    teamProjectUrl: "",
    CardComponent: HillaCard2,
    JokePageComponent: HillaJokePage2,
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
