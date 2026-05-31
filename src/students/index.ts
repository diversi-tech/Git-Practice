import { Student } from "../types";
import TamarZwiebelCard from "./Tamar-Zwiebel/Card";
import TamarZwiebelJokePage from "./Tamar-Zwiebel/JokePage";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import hadasCard from "./hadas/Card";
import hadasPage from "./hadas/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import YehuditBJokePage from "./YehuditB/JokePage";
import YehuditBCard from "./YehuditB/Card";

import yaelihainCard from "./yaeli-hain/Card";
import yaelihainJokePage from "./yaeli-hain/JokePage";

import saralevinCard from "./sara-levin/Card";
import saralevinJokePage from "./sara-levin/JokePage";

import EfratMadmonCard from "./Efrat-Madmon/Card";
import EfratMadmonJokePage from "./Efrat-Madmon/JokePage";

import yaelirosnerCard from "./yaeli-rosner/Card";
import yaelirosnerJokePage from "./yaeli-rosner/JokePage";


import TamarDamtiCard from "./tamar-damti/Card";
import TamarDamtiJokePage from "./tamar-damti/JokePage";

import YehuditCard from "./yehudit vagshal/Card";
import YehuditJokePage from "./yehudit vagshal/JokePage";
import giliCard from "./Gili-Lev/Card";
import GiliJokePage from "./Gili-Lev/JokePage";

import RutiCard from "./ruti-paniri/Card";
import RutiJokePage from "./ruti-paniri/JokePage";

import ShiraCarmiJokePage from "./shira-carmi/JokePage";
import ShiraCarmiCard from "./shira-carmi/Card";

import ShifraZaafraniCard from "./Shifra-Zaafrani/Card";
import ShifraZaafraniJokePage from "./Shifra-Zaafrani/JokePage";

import SariYagelnikCard from "./Sari-Yagelnik/Card";
import SariYagelnikJokePage from "./Sari-Yagelnik/JokePage.tsx";

import MalkaCard from "./malka-gadlowitz/Card";
import MalkaJokePage from "./malka-gadlowitz/JokePage";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
const students: Student[] = [
   {
  id: "malka-gedelovitz",
  name: "מלכה גדלוביץ",
  jokeTitle: "המתכנת והקפה",
  CardComponent: MalkaCard,
  JokePageComponent: MalkaJokePage,
},
  {

    id: "Yehudit",
    name: "יהודית בירמן",
    jokeTitle: "לאן הגיע הפינגווין???",
    CardComponent: YehuditBCard,
    JokePageComponent: YehuditBJokePage,
  },
  {
    id: "dana-duvi",
    name: "דנה דובי",
    jokeTitle: "הדוב הפחדן",
    CardComponent: DanaDuviCard,
    JokePageComponent: DanaDuviJokePage,
  },
      {
    id: "tamar-damti",
    name: "תמר דמתי",
    jokeTitle: "הבננה",
    CardComponent: TamarDamtiCard,
    JokePageComponent: TamarDamtiJokePage,
  },
  
  {
  id: "yaeli-hain",
  name: "יעלי היין",
  jokeTitle:"באגים",
  CardComponent: yaelihainCard,
  JokePageComponent: yaelihainJokePage,
},
  {
    id: "yehudit",
    name: "יהודית וגשל",
    jokeTitle: "כוסות מים",
    CardComponent: YehuditCard,
    JokePageComponent: YehuditJokePage,
  },
   {
    id: "Shifra-Zaafrani",
    name: "שפרה זעפרני",
    jokeTitle: "הקבצן ברחוב",
    CardComponent: ShifraZaafraniCard,
    JokePageComponent: ShifraZaafraniJokePage,
    },

  {
    id: "hadas",
    name: "הדס חומרי",
    jokeTitle: "סכנת התקררות❄️",
    CardComponent: hadasCard,
    JokePageComponent: hadasPage,
  },
  {
    id: "chani-chanzin",
    name: "חני חנזין",
    jokeTitle: "התנין והתנינה",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },
   {
    id: "Sari-Yagelnik",
    name: "שרי יגלניק",
    jokeTitle: "העז והדוב",
    CardComponent: SariYagelnikCard,
    JokePageComponent: SariYagelnikJokePage,
  },
  
  {
    id: "shira-carmi",
    name: "שירה כרמי",
    jokeTitle: "המפתחים וה-Git",
    CardComponent: ShiraCarmiCard,
    JokePageComponent: ShiraCarmiJokePage,
  },
  
{
    id: "gili-lev",
    name: "גילי לב",
    jokeTitle: "מה קרה בשמונה? ⏰",
    CardComponent: giliCard,
    JokePageComponent: GiliJokePage,
  },
  
{
  id: "sara-levin",
  name: "שרה לוין",
  jokeTitle: "אמא של מתכנתים",
  CardComponent: saralevinCard,
  JokePageComponent: saralevinJokePage,

},

{
  id: "Efrat-Madmon",
  name: "אפרת מדמון",
  jokeTitle: "עשרה שקלים",
  CardComponent: EfratMadmonCard,
  JokePageComponent: EfratMadmonJokePage,
},
{
  id: "Ruti-Paniri",
  name: "רותי פנירי",
  jokeTitle: "המחשב העקשן",
  CardComponent: RutiCard,
  JokePageComponent: RutiJokePage,
},
{
    id: "Tamar_zwiebel",
    name: "תמר צויבל",
    jokeTitle: "לא באחריותי! 🛑",
    CardComponent: TamarZwiebelCard,
    JokePageComponent: TamarZwiebelJokePage,
  },
  
  {
  id: "yaeli-rosner",
  name: "יעלי רוזנר",
  jokeTitle: "מה קרה למרק???",
  CardComponent: yaelirosnerCard,
  JokePageComponent: yaelirosnerJokePage,
  }
  
];
export default students;