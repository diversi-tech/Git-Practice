import { Student } from "../types";
import HillaCard2 from "./Hilla-Arye-2/Card";
import HillaJokePage2 from "./Hilla-Arye-2/JokePage";
import NoaCard from "./noa_gabay/NoaCard";
import NoaJokePage from "./noa_gabay/NoaJokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  { id: "hilla-arye-2", name: "הילה אריה", jokeTitle: "מנקה יסודי", email: "yaeli.rosner@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: HillaCard2, JokePageComponent: HillaJokePage2 },
  { id: "noa-gabay", name: "נועה גבאי", jokeTitle: "בדיחה בינארית", email: "noa94744@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: NoaCard, JokePageComponent: NoaJokePage },
  { id: "dana-duvi", name: "דנה דובי", jokeTitle: "הדוב הפחדן", CardComponent: DanaDuviCard, JokePageComponent: DanaDuviJokePage },
  { id: "chani-chanzin", name: "חני חנזין", jokeTitle: "התנין והתנינה", CardComponent: ChaniChanzinCard, JokePageComponent: ChaniChanzinJokePage },
];

export default students;
