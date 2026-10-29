import { Student } from "../../types";
import YehuditBirmanCard from "./yehudit-birman/Card";
import YehuditBirmanJokePage from "./yehudit-birman/JokePage";
import YaelHainCard from "./yael-hain/Card";
import YaelHainJokePage from "./yael-hain/JokePage";
import SaraLevinCard from "./sara-levin/Card";
import SaraLevinJokePage from "./sara-levin/JokePage";
import EfratMadmonCard from "./efrat-madmon/Card";
import EfratMadmonJokePage from "./efrat-madmon/JokePage";
import YaeliRosnerCard from "./yaeli-rosner/Card";
import YaeliRosnerJokePage from "./yaeli-rosner/JokePage";
import TamarDamtiCard from "./tamar-damti/Card";
import TamarDamtiJokePage from "./tamar-damti/JokePage";
import HadasHomriCard from "./hadas-homri/Card";
import HadasHomriJokePage from "./hadas-homri/JokePage";
import TamarZwiebelCard from "./tamar-zwiebel/Card";
import TamarZwiebelJokePage from "./tamar-zwiebel/JokePage";
import GiliLevCard from "./gili-lev/Card";
import GiliLevJokePage from "./gili-lev/JokePage";
import YehuditVogshalCard from "./yehudit-vogshal/Card";
import YehuditVogshalJokePage from "./yehudit-vogshal/JokePage";
import ShifraZaafraniCard from "./shifra-zaafrani/Card";
import ShifraZaafraniJokePage from "./shifra-zaafrani/JokePage";
import RutiPaniriCard from "./ruti-paniri/Card";
import RutiPaniriJokePage from "./ruti-paniri/JokePage";
import SariYagelnikCard from "./sari-yagelnik/Card";
import SariYagelnikJokePage from "./sari-yagelnik/JokePage";
import MalkiGdelovitzCard from "./malki-gdelovitz/Card";
import MalkiGdelovitzJokePage from "./malki-gdelovitz/JokePage";
import ShiraCarmiCard from "./shira-carmi/Card";
import ShiraCarmiJokePage from "./shira-carmi/JokePage";

const solaStudents: Student[] = [
  { id: "yehudit-birman", name: "יהודית בירמן", jokeTitle: "לאן הגיע הפינגווין?", email: "yb3215224@gmail.com", teamName: "Sola-5", teamProjectUrl: "", CardComponent: YehuditBirmanCard, JokePageComponent: YehuditBirmanJokePage },
  { id: "yael-hain", name: "יעל היין", jokeTitle: "באגים", email: "yh21661355@gmail.com", teamName: "Sola-3", teamProjectUrl: "", CardComponent: YaelHainCard, JokePageComponent: YaelHainJokePage },
  { id: "sara-levin", name: "שרה לוין", jokeTitle: "אמא של מתכנתים", email: "saralev45@gmail.com", teamName: "Sola-3", teamProjectUrl: "", CardComponent: SaraLevinCard, JokePageComponent: SaraLevinJokePage },
  { id: "efrat-madmon", name: "אפרת מדמון", jokeTitle: "עשרה שקלים", email: "hodaya8884@gmail.com", teamName: "Sola-3", teamProjectUrl: "", CardComponent: EfratMadmonCard, JokePageComponent: EfratMadmonJokePage },
  { id: "yaeli-rosner", name: "יעלי רוזנר", jokeTitle: "מה קרה למרק?", email: "yaeli.rosner@gmail.com", teamName: "Sola-3", teamProjectUrl: "", CardComponent: YaeliRosnerCard, JokePageComponent: YaeliRosnerJokePage },
  { id: "tamar-damti", name: "תמר דמתי", jokeTitle: "הבננה", email: "td0556730767@gmail.com", teamName: "Sola-2", teamProjectUrl: "", CardComponent: TamarDamtiCard, JokePageComponent: TamarDamtiJokePage },
  { id: "hadas-homri", name: "הדס חומרי", jokeTitle: "סכנת התקררות", email: "hadasc917@gmail.com", teamName: "Sola-2", teamProjectUrl: "", CardComponent: HadasHomriCard, JokePageComponent: HadasHomriJokePage },
  { id: "tamar-zwiebel", name: "תמר צויבל", jokeTitle: "לא באחריותי!", email: "tamarzwiebel@gmail.com", teamName: "Sola-2", teamProjectUrl: "", CardComponent: TamarZwiebelCard, JokePageComponent: TamarZwiebelJokePage },
  { id: "gili-lev", name: "גילי לב", jokeTitle: "מה קרה בשמונה?", email: "gili6760558@gmail.com", teamName: "Sola-2", teamProjectUrl: "", CardComponent: GiliLevCard, JokePageComponent: GiliLevJokePage },
  { id: "yehudit-vogshal", name: "יהודית וגשל", jokeTitle: "כוסות מים", email: "y0548548713@gmail.com", teamName: "Sola-2", teamProjectUrl: "", CardComponent: YehuditVogshalCard, JokePageComponent: YehuditVogshalJokePage },
  { id: "shifra-zaafrani", name: "שפרה זעפרני", jokeTitle: "הקבצן ברחוב", email: "shifiz9310@gmail.com", teamName: "Sola-1", teamProjectUrl: "", CardComponent: ShifraZaafraniCard, JokePageComponent: ShifraZaafraniJokePage },
  { id: "ruti-paniri", name: "רותי פנירי", jokeTitle: "המחשב העקשן", email: "rp0556797395@gmail.com", teamName: "Sola-1", teamProjectUrl: "", CardComponent: RutiPaniriCard, JokePageComponent: RutiPaniriJokePage },
  { id: "sari-yagelnik", name: "שרי יגלניק", jokeTitle: "העז והדוב", email: "sw895895@gmail.com", teamName: "Sola-1", teamProjectUrl: "", CardComponent: SariYagelnikCard, JokePageComponent: SariYagelnikJokePage },
  { id: "malki-gdelovitz", name: "מלכי גדלוביץ", jokeTitle: "המתכנת והקפה", email: "m0556727693@gmail.com", teamName: "Sola-1", teamProjectUrl: "", CardComponent: MalkiGdelovitzCard, JokePageComponent: MalkiGdelovitzJokePage },
  { id: "shira-carmi", name: "שירה כרמי", jokeTitle: "המפתחים ו-Git", email: "sh0548508177@gmail.com", teamName: "Sola-1", teamProjectUrl: "", CardComponent: ShiraCarmiCard, JokePageComponent: ShiraCarmiJokePage },
];

export default solaStudents;
