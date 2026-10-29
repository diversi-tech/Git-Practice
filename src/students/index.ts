import { Student } from "../types";
import vcommStudents from "./vcomm";
import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";
import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

const students: Student[] = [
  ...vcommStudents,
  { id: "dana-duvi", name: "דנה דובי", jokeTitle: "הדוב הפחדן", CardComponent: DanaDuviCard, JokePageComponent: DanaDuviJokePage },
  { id: "chani-chanzin", name: "חני חנזין", jokeTitle: "התנין והתנינה", CardComponent: ChaniChanzinCard, JokePageComponent: ChaniChanzinJokePage },
];

export default students;
