import StudentCard from "../../components/StudentCard";
import StudentJokePage from "../../components/StudentJokePage";
import type { Student, StudentProfile } from "../../types";
import ayeletDluya from "./ayelet-dluya";
import efratPosen from "./efrat-posen";
import esterLevin from "./ester-levin";
import rachelDabush from "./rachel-dabush";
import racheliPanet from "./racheli-panet";
import racheliWeinberger from "./racheli-weinberger";
import talia from "./talia";
import yaelYosef from "./yael-yosef";
import yehuditKyatra from "./yehudit-kyatra";

function createStudent(student: Omit<Student, "CardComponent" | "JokePageComponent" | "profile">, profile: StudentProfile): Student {
  return {
    ...student,
    profile,
    CardComponent: StudentCard,
    JokePageComponent: StudentJokePage,
  };
}

const kyatraStudents: Student[] = [
  createStudent({ id: "rachel-dabush", name: "רחל דבוש", jokeTitle: "המחשב של הלקוח", email: "rachely569@gmail.com", teamName: "Kyatra-1", teamProjectUrl: "" }, rachelDabush),
  createStudent({ id: "efrat-posen", name: "אפרת פוזן", jokeTitle: "אובד אצות", email: "efposen70@gmail.com", teamName: "Kyatra-1", teamProjectUrl: "" }, efratPosen),
  createStudent({ id: "talia", name: "טליה", jokeTitle: "הקקטוס והבלון", email: "th0556721530@gmail.com", teamName: "Kyatra-1", teamProjectUrl: "" }, talia),
  createStudent({ id: "yehudit-kyatra", name: "יהודית", jokeTitle: "הקפה והכפית", email: "yehudit0523@gmail.com", teamName: "Kyatra-2", teamProjectUrl: "" }, yehuditKyatra),
  createStudent({ id: "yael-yosef", name: "יעל יוסף", jokeTitle: "מכנסיים של מישהו אחר", email: "my0625931212@gmail.com", teamName: "Kyatra-2", teamProjectUrl: "" }, yaelYosef),
  createStudent({ id: "racheli-weinberger", name: "רחלי וינברגר", jokeTitle: "כפית אחת יותר מדי", email: "r7654080@gmail.com", teamName: "Kyatra-2", teamProjectUrl: "" }, racheliWeinberger),
  createStudent({ id: "ester-levin", name: "אסתר לוין", jokeTitle: "הכובע והקוד", email: "esterlewin9334@gmail.com", teamName: "Kyatra-3", teamProjectUrl: "" }, esterLevin),
  createStudent({ id: "ayelet-dluya", name: "איילת דלויה", jokeTitle: "ארבעת שלבי הקוד", email: "a0583296867@gmail.com", teamName: "Kyatra-3", teamProjectUrl: "" }, ayeletDluya),
  createStudent({ id: "racheli-panet", name: "רחלי פנט", jokeTitle: "האצבע השבורה", email: "rachel118147@gmail.com", teamName: "Kyatra-3", teamProjectUrl: "" }, racheliPanet),
];

export default kyatraStudents;
