import { Student } from "../types";

import DanaDuviCard from "./dana-duvi/Card";
import DanaDuviJokePage from "./dana-duvi/JokePage";

import ChaniChanzinCard from "./chani-chanzin/Card";
import ChaniChanzinJokePage from "./chani-chanzin/JokePage";

import AvitalZakCard from "./avital-zak/Card";
import AvitalZakJokePage from "./avital-zak/JokePage";

import ShilatBenGigiCard from "./shilat-ben-gigi/Card";
import ShilatBenGigiJokePage from "./shilat-ben-gigi/JokePage";

// ⚠️ סדר הרשימה חייב להיות לפי סדר האלף-בית העברי לפי שם המשפחה.
// כל תלמידה מוסיפה את עצמה במקום הנכון ידנית.
// אסור להשתמש בפונקציית-sort! 
const students: Student[] = [
  {
    id: "shilat-ben-gigi",
    name: "שילת בן גיגי",
    jokeTitle: "הרמה הבאה",
    CardComponent: ShilatBenGigiCard,
    JokePageComponent: ShilatBenGigiJokePage,
  },
  {
    id: "dana-duvi",
    name: "דנה דובי",
    jokeTitle: "הדוב הפחדן",
    CardComponent: DanaDuviCard,
    JokePageComponent: DanaDuviJokePage,
  },

  {
    id: "avital-zak",
    name: "אביטל זק",
    jokeTitle: "המחשב והווירוס",
    CardComponent: AvitalZakCard,
    JokePageComponent: AvitalZakJokePage,
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
