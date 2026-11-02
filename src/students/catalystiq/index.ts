import StudentCard from "../../components/StudentCard";
import StudentJokePage from "../../components/StudentJokePage";
import type { Student, StudentProfile } from "../../types";
import chayaSprung from "./chaya-sprung";
import efratAbukasis from "./efrat-abukasis";
import efratMittelman from "./efrat-mittelman";
import hodayaYfrach from "./hodaya-yfrach";
import nechamiBrim from "./nechami-brim";
import noaMegera from "./noa-megera";
import oritZadok from "./orit-zadok";
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
  createStudent({ id: "yael-ordman", name: "יעל אורדמן", jokeTitle: "רקורסיה", email: "ordman052@gmail.com", teamName: "CatalystIQ-1", teamProjectUrl: "" }, yaelOrdman),
  createStudent({ id: "nechami-brim", name: "נחמי ברים", jokeTitle: "חוק שימור הבאגים", email: "nch39775@gmail.com", teamName: "CatalystIQ-1", teamProjectUrl: "" }, nechamiBrim),
  createStudent({ id: "yael-shitrit", name: "יעל שטרית", jokeTitle: "הדוב והעכבר", email: "yaels98283@gmail.com", teamName: "CatalystIQ-1", teamProjectUrl: "" }, yaelShitrit),
  createStudent({ id: "chaya-sprung", name: "חיה שפרונג", jokeTitle: "בדיקת ראייה", email: "chaya60502@gmail.com", teamName: "CatalystIQ-1", teamProjectUrl: "" }, chayaSprung),
  createStudent({ id: "efrat-mittelman", name: "אפרת מיטלמן", jokeTitle: "וירוס במחשב", email: "efratmit@gmail.com", teamName: "CatalystIQ-1", teamProjectUrl: "" }, efratMittelman),
  createStudent({ id: "efrat-abukasis", name: "אפרת אבוקסיס", jokeTitle: "המחשב העייף", email: "efrat2164@gmail.com", teamName: "CatalystIQ-2", teamProjectUrl: "" }, efratAbukasis),
  createStudent({ id: "noa-megera", name: "נועה מגירה", jokeTitle: "באג חברתי", email: "noameg99@gmail.com", teamName: "CatalystIQ-2", teamProjectUrl: "" }, noaMegera),
  createStudent({ id: "orit-zadok", name: "אורית צדוק", jokeTitle: "המתכנת בסופר", email: "6169542@gmail.com", teamName: "CatalystIQ-2", teamProjectUrl: "" }, oritZadok),
  createStudent({ id: "hodaya-yfrach", name: "הודיה יפרח", jokeTitle: "כולם כאלה?", email: "8564417@gmail.com", teamName: "CatalystIQ-3", teamProjectUrl: "" }, hodayaYfrach),
  createStudent({ id: "yael-refaelov", name: "יעל רפאלוב", jokeTitle: "המטרייה של ההייטק", email: "yael0533185780@gmail.com", teamName: "CatalystIQ-3", teamProjectUrl: "" }, yaelRefaelov),
  createStudent({ id: "tamar-rotan", name: "תמר רותן", jokeTitle: "ראיון עבודה", email: "3295797@gmail.com", teamName: "CatalystIQ-3", teamProjectUrl: "" }, tamarRotan),
];

export default catalystIqStudents;
