import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

<<<<<<< HEAD
import AvishagCard from "./avishag/Card";
import AvishagJokePage from "./avishag/jokePage";
=======
import ShilatBenGigiCard from "./shilat-ben-gigi/Card";
import ShilatBenGigiJokePage from "./shilat-ben-gigi/JokePage";
>>>>>>> origin/stars-green-monabid

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort! 
const students: Student[] = [
  {
<<<<<<< HEAD
    id: "avishag",
    name: "אבישג בן דוד",
    jokeTitle: "המחשב החולה",
    CardComponent: AvishagCard,
    JokePageComponent: AvishagJokePage,
=======
    id: "shilat-ben-gigi",
    name: "שילת בן גיגי",
    jokeTitle: "הרמה הבאה",
    CardComponent: ShilatBenGigiCard,
    JokePageComponent: ShilatBenGigiJokePage,
>>>>>>> origin/stars-green-monabid
  },
  {
    id: "dana-duvi",
    name: "דנה דובי",
    jokeTitle: "הדוב הפחדן",
    CardComponent: DanaDuviCard,
    JokePageComponent: DanaDuviJokePage,
  },
  {
    id: "chani-chanzin",
    name: "חני חנזין",
    jokeTitle: "התנין והתנינה",
    CardComponent: ChaniChanzinCard,
    JokePageComponent: ChaniChanzinJokePage,
  },
];

export default students;
