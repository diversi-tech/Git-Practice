import { Student } from "../../types";
import HillaCard from "./hilla-arye/Card";
import HillaJokePage from "./hilla-arye/JokePage";
import HadasKarasentiCard from "./hadas-karasenti/Card";
import HadasKarasentiJokePage from "./hadas-karasenti/JokePage";
import ShiraGidiCard from "./shira-gidi/Card";
import ShiraGidiJokePage from "./shira-gidi/JokePage";
import AyalaKleinCard from "./ayala-klein/Card";
import AyalaKleinJokePage from "./ayala-klein/JokePage";
import NoaCard from "./noa-gabay/NoaCard";
import NoaJokePage from "./noa-gabay/NoaJokePage";
import ShaniCard from "./shani-drabkin/Card";
import ShaniJokePage from "./shani-drabkin/JokePage";
import MalkaCard from "./malka/Card";
import MalkaJokePage from "./malka/JokePage";
import YaelCard from "./yael-malka/Card";
import YaelJokePage from "./yael-malka/JokePage";
import EtiCard from "./eti/Card";
import EtiJokePage from "./eti/JokePage";
import HadarCard from "./hadar-jerafi/Card";
import HadarJokePage from "./hadar-jerafi/JokePage";
import ShiraShemeshCard from "./shira-shemesh/Card";
import ShiraShemeshJokePage from "./shira-shemesh/JokePage";
import HadasKohaviCard from "./hadas-kohavi/Card";
import HadasKohaviJokePage from "./hadas-kohavi/JokePage";
import TovaCard from "./tovi/Card";
import TovaJokePage from "./tovi/JokePage";
import RivkaCard from "./rivka-barashi/Card";
import RivkaJokePage from "./rivka-barashi/JokePage";
import TamarCard from "./tamar-levi/Card";
import TamarJokePage from "./tamar-levi/JokePage";
import MaayanCard from "./maayan/Card";
import MaayanJokePage from "./maayan/JokePage";

const vcommStudents: Student[] = [
  { id: "hilla-arye", name: "הילה אריה", jokeTitle: "מנקה יסודי", email: "hillaarye@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: HillaCard, JokePageComponent: HillaJokePage },
  { id: "hadas-karasenti", name: "הדס קרסנטי", jokeTitle: "המחשב אצל הרופא", email: "hadaskarasenti1@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: HadasKarasentiCard, JokePageComponent: HadasKarasentiJokePage },
  { id: "shira-gidi", name: "שירה יהודית גידי", jokeTitle: "בדיחת מתכנתים", email: "shiragidi12@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: ShiraGidiCard, JokePageComponent: ShiraGidiJokePage },
  { id: "ayala-klein", name: "אילה קליין", jokeTitle: "לולאה שלא עוצרת", email: "ayalakl5335@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: AyalaKleinCard, JokePageComponent: AyalaKleinJokePage },
  { id: "noa-gabay", name: "נועה גבאי", jokeTitle: "בדיחה בינארית", email: "noa94744@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "", CardComponent: NoaCard, JokePageComponent: NoaJokePage },
  { id: "shani-drabkin", name: "שני דרבקין", jokeTitle: "בדיחת באגים", email: "sh0504104723@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: ShaniCard, JokePageComponent: ShaniJokePage },
  { id: "malka", name: "מלכה", jokeTitle: "דיאטת מתכנתים", email: "malkibc2007@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: MalkaCard, JokePageComponent: MalkaJokePage },
  { id: "yael-malka", name: "יעל מלכא", jokeTitle: "מורה ותלמיד", email: "yael0583245698@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: YaelCard, JokePageComponent: YaelJokePage },
  { id: "eti-orenbach", name: "אתי אורנבך", jokeTitle: "חליפה למחפשי עבודה", email: "eti7671@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: EtiCard, JokePageComponent: EtiJokePage },
  { id: "hadar", name: "הדר ג'ראפי", jokeTitle: "אם יש ביצים", email: "hadar0583229585@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "", CardComponent: HadarCard, JokePageComponent: HadarJokePage },
  { id: "shira-shemesh", name: "שירה שמש", jokeTitle: "בננה נחמדת", email: "sh6706410@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: ShiraShemeshCard, JokePageComponent: ShiraShemeshJokePage },
  { id: "hadas-kohavi", name: "הדס כוכבי", jokeTitle: "כוס קפה", email: "hadas.kohavi@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: HadasKohaviCard, JokePageComponent: HadasKohaviJokePage },
  { id: "tovi", name: "טובי גרינגרד", jokeTitle: "אופניים עייפים", email: "t0556746399@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: TovaCard, JokePageComponent: TovaJokePage },
  { id: "rivka-barashi", name: "רבקה בראשי", jokeTitle: "Computer Doctor", email: "rb0583252581@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: RivkaCard, JokePageComponent: RivkaJokePage },
  { id: "tamar-levi", name: "תמר לוי", jokeTitle: "דיאטת Cookies", email: "tamarl5949@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: TamarCard, JokePageComponent: TamarJokePage },
  { id: "Maayan-Bukrits", name: "מעיין בוקריץ", jokeTitle: "מתכנתים", email: "maayanshira2006@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "", CardComponent: MaayanCard, JokePageComponent: MaayanJokePage },
];

export default vcommStudents;
