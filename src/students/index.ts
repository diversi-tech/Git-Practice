import { Student } from "../types";
import ShiraShemeshCard from "./shira-shemesh/Card";
import ShiraShemeshJokePage from "./shira-shemesh/JokePage";
import HadasKohaviCard from "./hadas-kohavi/Card";
import HadasKohaviJokePage from "./hadas-kohavi/JokePage";
import TovaCard from "./tovi/Card";
import TovaJokePage from "./tovi/JokePage";
import RivkaCard from "./Rivka/Card";
import RivkaJokePage from "./Rivka/JokePage";
import TamarCard from "./tamar-levi/Card";
import TamarJokePage from "./tamar-levi/JokePage";
import MaayanCard from "./maayan/Card";
import MaayanJokePage from "./maayan/JokePage";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  { id: "shira-shemesh", name: "שירה שמש", jokeTitle: "בננה נחמדת", email: "sh6706410@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: ShiraShemeshCard, JokePageComponent: ShiraShemeshJokePage },
  { id: "hadas-kohavi", name: "הדס כוכבי", jokeTitle: "כוס קפה", email: "hadas.kohavi@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: HadasKohaviCard, JokePageComponent: HadasKohaviJokePage },
  { id: "tovi", name: "טובי גרינגרד", jokeTitle: "אופניים עייפים", email: "t0556746399@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: TovaCard, JokePageComponent: TovaJokePage },
  { id: "rivka-barashi", name: "רבקה בראשי", jokeTitle: "Computer Doctor", email: "rb0583252581@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: RivkaCard, JokePageComponent: RivkaJokePage },
  { id: "tamar-levi", name: "תמר לוי", jokeTitle: "דיאטת Cookies", email: "tamarl5949@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: TamarCard, JokePageComponent: TamarJokePage },
  { id: "Maayan-Bukrits", name: "מעיין בוקריץ", jokeTitle: "מתכנתים", email: "maayanshira2006@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: MaayanCard, JokePageComponent: MaayanJokePage },
  { id: "dana-duvi", name: "דנה דובי", jokeTitle: "הדוב הפחדן", CardComponent: DanaDuviCard, JokePageComponent: DanaDuviJokePage },
  { id: "chani-chanzin", name: "חני חנזין", jokeTitle: "התנין והתנינה", CardComponent: ChaniChanzinCard, JokePageComponent: ChaniChanzinJokePage },
];

export default students;
