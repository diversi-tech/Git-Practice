import StudentCard from "../../components/StudentCard";
import StudentJokePage from "../../components/StudentJokePage";
import type { Student, StudentProfile } from "../../types";
import avigailHagoli from "./avigail-hagoli";
import chayaSprung from "./chaya-sprung";
import efratAbukasis from "./efrat-abukasis";
import efratMittelman from "./efrat-mittelman";
import hodayaYfrach from "./hodaya-yfrach";
import maayanBabahanov from "./maayan-babahanov";
import nechamiBrim from "./nechami-brim";
import noaMegera from "./noa-megera";
import oritZadok from "./orit-zadok";
import ruthMalkaMashiach from "./ruth-malka-mashiach";
import tamarRotan from "./tamar-rotan";
import yaelOrdman from "./yael-ordman";
import yaelRefaelov from "./yael-refaelov";
import yaelShitrit from "./yael-shitrit";

function createStudent(student: Omit<Student, "CardComponent" | "JokePageComponent" | "profile">, profile: StudentProfile): Student {
  return {
    ...student,
    profile,
    CardComponent: StudentCard,
    JokePageComponent: StudentJokePage,
  };
}

const catalystIqStudents: Student[] = [
  createStudent({ id: "yael-ordman", name: "יעל אורדמן", jokeTitle: "רקורסיה", email: "ordman052@gmail.com", teamName: "CatalystIQ-Discovery", teamProjectUrl: "" }, yaelOrdman),
  createStudent({ id: "nechami-brim", name: "נחמי ברים", jokeTitle: "חוק שימור הבאגים", email: "nch39775@gmail.com", teamName: "CatalystIQ-Discovery", teamProjectUrl: "" }, nechamiBrim),
  createStudent({ id: "yael-shitrit", name: "יעל שטרית", jokeTitle: "הדוב והעכבר", email: "yaels98283@gmail.com", teamName: "CatalystIQ-Discovery", teamProjectUrl: "" }, yaelShitrit),
  createStudent({ id: "chaya-sprung", name: "חיה שפרונג", jokeTitle: "בדיקת ראייה", email: "chaya60502@gmail.com", teamName: "CatalystIQ-Discovery", teamProjectUrl: "" }, chayaSprung),
  createStudent({ id: "efrat-mittelman", name: "אפרת מיטלמן", jokeTitle: "וירוס במחשב", email: "efratmit@gmail.com", teamName: "CatalystIQ-Discovery", teamProjectUrl: "" }, efratMittelman),
  createStudent({ id: "ruth-malka-mashiach", name: "רות מלכה משיח", jokeTitle: "משבר זהות ברשת", email: "rutush2163@gmail.com", teamName: "CatalystIQ-Discovery", teamProjectUrl: "" }, ruthMalkaMashiach),
  createStudent({ id: "efrat-abukasis", name: "אפרת אבוקסיס", jokeTitle: "המחשב העייף", email: "efrat2164@gmail.com", teamName: "CatalystIQ-Events", teamProjectUrl: "" }, efratAbukasis),
  createStudent({ id: "noa-megera", name: "נועה מגירה", jokeTitle: "באג חברתי", email: "noameg99@gmail.com", teamName: "CatalystIQ-Events", teamProjectUrl: "" }, noaMegera),
  createStudent({ id: "orit-zadok", name: "אורית צדוק", jokeTitle: "המתכנת בסופר", email: "6169542@gmail.com", teamName: "CatalystIQ-Events", teamProjectUrl: "" }, oritZadok),
  createStudent({ id: "maayan-babahanov", name: "מעיין בבחנוב", jokeTitle: "Sleep Mode", email: "maayan.nov.2006@gmail.com", teamName: "CatalystIQ-Events", teamProjectUrl: "" }, maayanBabahanov),
  createStudent({ id: "hodaya-yfrach", name: "הודיה יפרח", jokeTitle: "כולם כאלה?", email: "8564417@gmail.com", teamName: "CatalystIQ-Tracking", teamProjectUrl: "" }, hodayaYfrach),
  createStudent({ id: "yael-refaelov", name: "יעל רפאלוב", jokeTitle: "המטרייה של ההייטק", email: "yael0533185780@gmail.com", teamName: "CatalystIQ-Tracking", teamProjectUrl: "" }, yaelRefaelov),
  createStudent({ id: "tamar-rotan", name: "תמר רותן", jokeTitle: "ראיון עבודה", email: "3295797@gmail.com", teamName: "CatalystIQ-Tracking", teamProjectUrl: "" }, tamarRotan),
  createStudent({ id: "avigail-hagoli", name: "אביגיל חגולי", jokeTitle: "החתול המדבר", email: "avigail1700a@icloud.com", teamName: "CatalystIQ-Tracking", teamProjectUrl: "" }, avigailHagoli),
];

export default catalystIqStudents;
