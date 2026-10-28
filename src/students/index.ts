import { Student } from "../types";
import HillaCard2 from "./Hilla-Arye-2/Card";
import HillaJokePage2 from "./Hilla-Arye-2/JokePage";
import NoaCard from "./noa_gabay/NoaCard";
import NoaJokePage from "./noa_gabay/NoaJokePage";
import YaelCard from "./yael-malka/Card";
import YaelJokePage from "./yael-malka/JokePage";
import EtiCard from "./eti/Card";
import EtiJokePage from "./eti/JokePage";
import HadarCard from "./hadar-jerafi/Card";
import HadarJokePage from "./hadar-jerafi/JokePage";
import TovaCard from "./tovi/Card";
import TovaJokePage from "./tovi/JokePage";
import TovaJokePage2 from "./tovi/JokePage2";
import RivkaCard from "./Rivka/Card";
import RivkaJokePage from "./Rivka/JokePage";
import HillaCard from "./Hilla-Arye/Card";
import HillaJokePage from "./Hilla-Arye/JokePage";
import TamarCard from "./tamar-levi/Card";
import TamarJokePage from "./tamar-levi/JokePage";
import MaayanCard from "./maayan/Card";
import MaayanJokePage from "./maayan/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  { id: "hilla-arye-2", name: "הילה אריה", jokeTitle: "מנקה יסודי", email: "hilaarye@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: HillaCard2, JokePageComponent: HillaJokePage2 },
  { id: "noa-gabay", name: "נועה גבאי", jokeTitle: "בדיחה בינארית", email: "noa94744@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: NoaCard, JokePageComponent: NoaJokePage },
  { id: "yael-malka", name: "יעל מלכא", jokeTitle: "מורה ותלמיד", email: "329467211@zzv.org.il", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: YaelCard, JokePageComponent: YaelJokePage },
  { id: "eti-orenbach", name: "אתי אורנבך", jokeTitle: "חליפה למחפשי עבודה", email: "eti7671@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: EtiCard, JokePageComponent: EtiJokePage },
  { id: "hadar", name: "הדר ג'ראפי", jokeTitle: "אם יש ביצים", email: "Hadar0583229585@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: HadarCard, JokePageComponent: HadarJokePage },
  { id: "tovi-2", name: "טובה", jokeTitle: "Scarecrow Award", email: "t0556746399@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: TovaCard, JokePageComponent: TovaJokePage2 },
  { id: "tovi", name: "טובה", jokeTitle: "אופניים עייפים", email: "t0556746399@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: TovaCard, JokePageComponent: TovaJokePage },
  { id: "rivka-barashi", name: "Rivka Barashi", jokeTitle: "Computer Doctor", email: "rb0583252581@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: RivkaCard, JokePageComponent: RivkaJokePage },
  { id: "hilla-arye", name: "הילה אריה", jokeTitle: "Dark Mode", email: "hilaarye@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: HillaCard, JokePageComponent: HillaJokePage },
  { id: "tamar-levi", name: "תמר לוי", jokeTitle: "דיאטת Cookies", email: "tamarl5949@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: TamarCard, JokePageComponent: TamarJokePage },
  { id: "Maayan-Bukrits", name: "מעיין בוקריץ", jokeTitle: "מתכנתים", email: "215746686@zzv.org.il", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: MaayanCard, JokePageComponent: MaayanJokePage },
  { id: "dana-duvi", name: "דנה דובי", jokeTitle: "הדוב הפחדן", CardComponent: DanaDuviCard, JokePageComponent: DanaDuviJokePage },
  { id: "chani-chanzin", name: "חני חנזין", jokeTitle: "התנין והתנינה", CardComponent: ChaniChanzinCard, JokePageComponent: ChaniChanzinJokePage },
];

export default students;
