import StudentCard from "../../components/StudentCard";
import StudentJokePage from "../../components/StudentJokePage";
import type { Student, StudentProfile } from "../../types";
import ayalaKlein from "./ayala-klein";
import etiOrenbach from "./eti-orenbach";
import hadar from "./hadar";
import hadasKarasenti from "./hadas-karasenti";
import hadasKohavi from "./hadas-kohavi";
import hillaArye from "./hilla-arye";
import maayan from "./maayan";
import malka from "./malka";
import noaGabay from "./noa-gabay";
import rivkaBarashi from "./rivka-barashi";
import shaniDrabkin from "./shani-drabkin";
import shiraGidi from "./shira-gidi";
import shiraShemesh from "./shira-shemesh";
import tamarLevi from "./tamar-levi";
import tovi from "./tovi";
import yaelMalka from "./yael-malka";

function createStudent(student: Omit<Student, "CardComponent" | "JokePageComponent" | "profile">, profile: StudentProfile): Student {
  return {
    ...student,
    profile,
    CardComponent: StudentCard,
    JokePageComponent: StudentJokePage,
  };
}

const vcommStudents: Student[] = [
  createStudent({ id: "hilla-arye", name: "הילה אריה", jokeTitle: "מנקה יסודי", email: "hillaarye@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "" }, hillaArye),
  createStudent({ id: "hadas-karasenti", name: "הדס קרסנטי", jokeTitle: "המחשב אצל הרופא", email: "hadaskarasenti1@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "" }, hadasKarasenti),
  createStudent({ id: "shira-gidi", name: "שירה יהודית גידי", jokeTitle: "בדיחת מתכנתים", email: "shiragidi12@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "" }, shiraGidi),
  createStudent({ id: "ayala-klein", name: "אילה קליין", jokeTitle: "לולאה שלא עוצרת", email: "ayalakl5335@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "" }, ayalaKlein),
  createStudent({ id: "noa-gabay", name: "נועה גבאי", jokeTitle: "בדיחה בינארית", email: "noa94744@gmail.com", teamName: "Vcomm-3", teamProjectUrl: "" }, noaGabay),
  createStudent({ id: "shani-drabkin", name: "שני דרבקין", jokeTitle: "בדיחת באגים", email: "sh0504104723@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "" }, shaniDrabkin),
  createStudent({ id: "malka", name: "מלכה", jokeTitle: "דיאטת מתכנתים", email: "malkibc2007@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "" }, malka),
  createStudent({ id: "yael-malka", name: "יעל מלכא", jokeTitle: "מורה ותלמיד", email: "yael0583245698@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "" }, yaelMalka),
  createStudent({ id: "eti-orenbach", name: "אתי אורנבך", jokeTitle: "חליפה למחפשי עבודה", email: "eti7671@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "" }, etiOrenbach),
  createStudent({ id: "hadar", name: "הדר ג'ראפי", jokeTitle: "אם יש ביצים", email: "hadar0583229585@gmail.com", teamName: "Vcomm-2", teamProjectUrl: "" }, hadar),
  createStudent({ id: "shira-shemesh", name: "שירה שמש", jokeTitle: "בננה נחמדת", email: "sh6706410@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "" }, shiraShemesh),
  createStudent({ id: "hadas-kohavi", name: "הדס כוכבי", jokeTitle: "כוס קפה", email: "hadas.kohavi@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "" }, hadasKohavi),
  createStudent({ id: "tovi", name: "טובי גרינגרד", jokeTitle: "אופניים עייפים", email: "t0556746399@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "" }, tovi),
  createStudent({ id: "rivka-barashi", name: "רבקה בראשי", jokeTitle: "Computer Doctor", email: "rb0583252581@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "" }, rivkaBarashi),
  createStudent({ id: "tamar-levi", name: "תמר לוי", jokeTitle: "דיאטת Cookies", email: "tamarl5949@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "" }, tamarLevi),
  createStudent({ id: "Maayan-Bukrits", name: "מעיין בוקריץ", jokeTitle: "מתכנתים", email: "maayanshira2006@gmail.com", teamName: "Vcomm-1", teamProjectUrl: "" }, maayan),
];

export default vcommStudents;
