import { Student } from "../types";
import HillaCard from "./Hilla-Arye/Card";
import HillaJokePage from "./Hilla-Arye/JokePage";
import HadasKarasentiCard from "./hadas-karasenti/Card";
import HadasKarasentiJokePage from "./hadas-karasenti/JokePage";
import AyalaKleinCard from "./ayala-klein/Card";
import AyalaKleinJokePage from "./ayala-klein/JokePage";
import NoaCard from "./noa_gabay/NoaCard";
import NoaJokePage from "./noa_gabay/NoaJokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  { id: "hilla-arye", name: "הילה אריה", jokeTitle: "Dark Mode", email: "hillaarye@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: HillaCard, JokePageComponent: HillaJokePage },
  { id: "hadas-karasenti", name: "הדס קרסנטי", jokeTitle: "המחשב אצל הרופא", email: "hadaskarasenti1@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: HadasKarasentiCard, JokePageComponent: HadasKarasentiJokePage },
  { id: "ayala-klein", name: "אילה קליין", jokeTitle: "לולאה שלא עוצרת", email: "ayalakl5335@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: AyalaKleinCard, JokePageComponent: AyalaKleinJokePage },
  { id: "noa-gabay", name: "נועה גבאי", jokeTitle: "בדיחה בינארית", email: "noa94744@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: NoaCard, JokePageComponent: NoaJokePage },
  { id: "dana-duvi", name: "דנה דובי", jokeTitle: "הדוב הפחדן", CardComponent: DanaDuviCard, JokePageComponent: DanaDuviJokePage },
  { id: "chani-chanzin", name: "חני חנזין", jokeTitle: "התנין והתנינה", CardComponent: ChaniChanzinCard, JokePageComponent: ChaniChanzinJokePage },
];

export default students;
