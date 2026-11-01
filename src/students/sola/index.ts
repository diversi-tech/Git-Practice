import StudentCard from "../../components/StudentCard";
import StudentJokePage from "../../components/StudentJokePage";
import type { Student, StudentProfile } from "../../types";
import efratMadmon from "./efrat-madmon";
import giliLev from "./gili-lev";
import hadasHomri from "./hadas-homri";
import malkiGdelovitz from "./malki-gdelovitz";
import rutiPaniri from "./ruti-paniri";
import saraLevin from "./sara-levin";
import sariYagelnik from "./sari-yagelnik";
import shifraZaafrani from "./shifra-zaafrani";
import shiraCarmi from "./shira-carmi";
import tamarDamti from "./tamar-damti";
import tamarZwiebel from "./tamar-zwiebel";
import yaelHain from "./yael-hain";
import yaeliRosner from "./yaeli-rosner";
import yehuditBirman from "./yehudit-birman";
import yehuditVogshal from "./yehudit-vogshal";

function createStudent(student: Omit<Student, "CardComponent" | "JokePageComponent" | "profile">, profile: StudentProfile): Student {
  return {
    ...student,
    profile,
    CardComponent: StudentCard,
    JokePageComponent: StudentJokePage,
  };
}

const solaStudents: Student[] = [
  createStudent({ id: "yehudit-birman", name: "יהודית בירמן", jokeTitle: "לאן הגיע הפינגווין?", email: "yb3215224@gmail.com", teamName: "Sola-5", teamProjectUrl: "" }, yehuditBirman),
  createStudent({ id: "yael-hain", name: "יעל היין", jokeTitle: "הדחליל המצטיין", email: "yh21661355@gmail.com", teamName: "Sola-3", teamProjectUrl: "" }, yaelHain),
  createStudent({ id: "sara-levin", name: "שרה לוין", jokeTitle: "אמא של מתכנתים", email: "saralev45@gmail.com", teamName: "Sola-3", teamProjectUrl: "" }, saraLevin),
  createStudent({ id: "efrat-madmon", name: "אפרת מדמון", jokeTitle: "עשרה שקלים", email: "hodaya8884@gmail.com", teamName: "Sola-3", teamProjectUrl: "" }, efratMadmon),
  createStudent({ id: "yaeli-rosner", name: "יעלי רוזנר", jokeTitle: "מה קרה למרק?", email: "yaeli.rosner@gmail.com", teamName: "Sola-3", teamProjectUrl: "" }, yaeliRosner),
  createStudent({ id: "tamar-damti", name: "תמר דמתי", jokeTitle: "הבננה", email: "td0556730767@gmail.com", teamName: "Sola-2", teamProjectUrl: "" }, tamarDamti),
  createStudent({ id: "hadas-homri", name: "הדס חומרי", jokeTitle: "סכנת התקררות", email: "hadasc917@gmail.com", teamName: "Sola-2", teamProjectUrl: "" }, hadasHomri),
  createStudent({ id: "tamar-zwiebel", name: "תמר צויבל", jokeTitle: "לא באחריותי!", email: "tamarzwiebel@gmail.com", teamName: "Sola-2", teamProjectUrl: "" }, tamarZwiebel),
  createStudent({ id: "gili-lev", name: "גילי לב", jokeTitle: "מה קרה בשמונה?", email: "gili6760558@gmail.com", teamName: "Sola-2", teamProjectUrl: "" }, giliLev),
  createStudent({ id: "yehudit-vogshal", name: "יהודית וגשל", jokeTitle: "השעון המעורר", email: "y0548548713@gmail.com", teamName: "Sola-2", teamProjectUrl: "" }, yehuditVogshal),
  createStudent({ id: "shifra-zaafrani", name: "שפרה זעפרני", jokeTitle: "הקבצן ברחוב", email: "shifiz9310@gmail.com", teamName: "Sola-1", teamProjectUrl: "" }, shifraZaafrani),
  createStudent({ id: "ruti-paniri", name: "רותי פנירי", jokeTitle: "המחשב העקשן", email: "rp0556797395@gmail.com", teamName: "Sola-1", teamProjectUrl: "" }, rutiPaniri),
  createStudent({ id: "sari-yagelnik", name: "שרי יגלניק", jokeTitle: "10 סוגים של אנשים", email: "sw895895@gmail.com", teamName: "Sola-1", teamProjectUrl: "" }, sariYagelnik),
  createStudent({ id: "malki-gdelovitz", name: "מלכי גדלוביץ", jokeTitle: "המתכנת והקפה", email: "m0556727693@gmail.com", teamName: "Sola-1", teamProjectUrl: "" }, malkiGdelovitz),
  createStudent({ id: "shira-carmi", name: "שירה כרמי", jokeTitle: "המפתחים ו-Git", email: "sh0548508177@gmail.com", teamName: "Sola-1", teamProjectUrl: "" }, shiraCarmi),
];

export default solaStudents;
