import StudentCard from "../../components/StudentCard";
import StudentJokePage from "../../components/StudentJokePage";
import type { Student, StudentProfile } from "../../types";
import avigailHagoli from "./avigail-hagoli";
import ayalaOshri from "./ayala-oshri";
import ayalaSamson from "./ayala-samson";
import brachaPappenheim from "./bracha-pappenheim";
import chanaMoshayev from "./chana-moshayev";
import chavivaSeiff from "./chaviva-seiff";
import etiMunk from "./eti-munk";
import litalShamanov from "./lital-shamanov";
import maayanBabahanov from "./maayan-babahanov";
import maayanShoukron from "./maayan-shoukron";
import ruthMalkaMashiach from "./ruth-malka-mashiach";
import saraRafalowitz from "./sara-rafalowitz";
import tamarLev from "./tamar-lev";
import yaelShoham from "./yael-shoham";
import zehaviGerlitz from "./zehavi-gerlitz";

function createStudent(student: Omit<Student, "CardComponent" | "JokePageComponent" | "profile">, profile: StudentProfile): Student {
  return {
    ...student,
    profile,
    CardComponent: StudentCard,
    JokePageComponent: StudentJokePage,
  };
}

const johnnyUpdateStudents: Student[] = [
  createStudent({ id: "ruth-malka-mashiach", name: "רות מלכה משיח", jokeTitle: "משבר זהות ברשת", email: "rutush2163@gmail.com", teamName: "Johnny Update-1", teamProjectUrl: "" }, ruthMalkaMashiach),
  createStudent({ id: "chana-moshayev", name: "חנה מושייב", jokeTitle: "וירוסים במחשב", email: "chanamoshayev5@gmail.com", teamName: "Johnny Update-1", teamProjectUrl: "" }, chanaMoshayev),
  createStudent({ id: "maayan-babahanov", name: "מעיין בבחנוב", jokeTitle: "Sleep Mode", email: "maayan.nov.2006@gmail.com", teamName: "Johnny Update-1", teamProjectUrl: "" }, maayanBabahanov),
  createStudent({ id: "avigail-hagoli", name: "אביגיל חגולי", jokeTitle: "החתול המדבר", email: "avigail1700a@icloud.com", teamName: "Johnny Update-1", teamProjectUrl: "" }, avigailHagoli),
  createStudent({ id: "bracha-pappenheim", name: "ברכה פפנהיים", jokeTitle: "Feature של היקום", email: "b0556792776@gmail.com", teamName: "Johnny Update-1", teamProjectUrl: "" }, brachaPappenheim),
  createStudent({ id: "yael-shoham", name: "יעל שהם", jokeTitle: "הילד המדבר", email: "shoam9797@gmail.com", teamName: "Johnny Update-1", teamProjectUrl: "" }, yaelShoham),
  createStudent({ id: "tamar-lev", name: "תמר לב", jokeTitle: "החושך והאור", email: "t0583298925@gmail.com", teamName: "Johnny Update-1", teamProjectUrl: "" }, tamarLev),
  createStudent({ id: "ayala-oshri", name: "אילה עושרי", jokeTitle: "לולאה אינסופית", email: "a0548547253@gmail.com", teamName: "Johnny Update-1", teamProjectUrl: "" }, ayalaOshri),
  createStudent({ id: "ayala-samson", name: "אילה סמסון", jokeTitle: "Purr-fect Accuracy", email: "as48422722@gmail.com", teamName: "Johnny Update-2", teamProjectUrl: "" }, ayalaSamson),
  createStudent({ id: "lital-shamanov", name: "ליטל שמנוב", jokeTitle: "באגים בטבע", email: "lital122105@gmail.com", teamName: "Johnny Update-2", teamProjectUrl: "" }, litalShamanov),
  createStudent({ id: "chaviva-seiff", name: "חביבה סייף", jokeTitle: "באגים מחוץ למערכת", email: "chavivarocks@gmail.com", teamName: "Johnny Update-2", teamProjectUrl: "" }, chavivaSeiff),
  createStudent({ id: "maayan-shoukron", name: "מעיין שוקרון", jokeTitle: "החלב הצוחק", email: "mayan.shou@gmail.com", teamName: "Johnny Update-2", teamProjectUrl: "" }, maayanShoukron),
  createStudent({ id: "sara-rafalowitz", name: "שרה רפאלוביץ׳", jokeTitle: "הטיסה והחומוס", email: "s0533132366@gmail.com", teamName: "Johnny Update-2", teamProjectUrl: "" }, saraRafalowitz),
  createStudent({ id: "zehavi-gerlitz", name: "זהבי גרליץ", jokeTitle: "כעכים או כאחים?", email: "chanigerlitz@gmail.com", teamName: "Johnny Update-3", teamProjectUrl: "" }, zehaviGerlitz),
  createStudent({ id: "eti-munk", name: "אתי מונק", jokeTitle: "לאכול עם כף", email: "eti43357@gmail.com", teamName: "Johnny Update-3", teamProjectUrl: "" }, etiMunk),
];

export default johnnyUpdateStudents;
