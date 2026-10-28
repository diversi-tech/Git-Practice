import { Student } from "../types";
import YaelCard from "./yael-malka/Card";
import YaelJokePage from "./yael-malka/JokePage";
import EtiCard from "./eti/Card";
import EtiJokePage from "./eti/JokePage";
import HadarCard from "./hadar-jerafi/Card";
import HadarJokePage from "./hadar-jerafi/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  { id: "yael-malka", name: "יעל מלכא", jokeTitle: "מורה ותלמיד", email: "329467211@zzv.org.il", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: YaelCard, JokePageComponent: YaelJokePage },
  { id: "eti-orenbach", name: "אתי אורנבך", jokeTitle: "חליפה למחפשי עבודה", email: "eti7671@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: EtiCard, JokePageComponent: EtiJokePage },
  { id: "hadar", name: "הדר ג'ראפי", jokeTitle: "אם יש ביצים", email: "Hadar0583229585@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: HadarCard, JokePageComponent: HadarJokePage },
  { id: "dana-duvi", name: "דנה דובי", jokeTitle: "הדוב הפחדן", CardComponent: DanaDuviCard, JokePageComponent: DanaDuviJokePage },
  { id: "chani-chanzin", name: "חני חנזין", jokeTitle: "התנין והתנינה", CardComponent: ChaniChanzinCard, JokePageComponent: ChaniChanzinJokePage },
];

export default students;
